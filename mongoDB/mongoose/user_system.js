const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    lastLogin: Date,
    loginAttempts: { type: Number, default: 0 },
    isLocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

// ============ PRE MIDDLEWARE ============

// 1. Hash password before saving
userSchema.pre('save', async function(next) {
    console.log('🔐 [PRE-SAVE] Checking password...');
    
    if (!this.isModified('password')) {
        console.log('📝 Password unchanged, skipping hash');
        return next();
    }
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('✅ Password hashed');
        next();
    } catch (error) {
        next(error);
    }
});

// 2. Set timestamps before saving
userSchema.pre('save', function(next) {
    console.log('⏰ [PRE-SAVE] Setting timestamps...');
    
    const now = new Date();
    
    if (!this.createdAt) {
        this.createdAt = now;
        console.log('📅 CreatedAt set');
    }
    
    this.updatedAt = now;
    console.log('📅 UpdatedAt set');
    
    next();
});

// 3. Don't allow saving if account is locked
userSchema.pre('save', function(next) {
    console.log('🔒 [PRE-SAVE] Checking lock status...');
    
    if (this.isLocked && this.loginAttempts > 5) {
        const error = new Error('Account is locked. Cannot save changes.');
        console.log('❌ Account locked, preventing save');
        return next(error);
    }
    
    next();
});

// 4. Always exclude deleted users from queries
userSchema.pre('find', function(next) {
    console.log('🔍 [PRE-FIND] Excluding deleted users');
    this.where({ isDeleted: { $ne: true } });
    next();
});


userSchema.pre('findOne', function(next) {
    console.log('🔍 [PRE-FINDONE] Excluding deleted users');
    this.where({ isDeleted: { $ne: true } });
    next();
});