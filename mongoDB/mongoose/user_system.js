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
