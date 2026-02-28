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
