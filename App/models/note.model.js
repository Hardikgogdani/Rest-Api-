const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    age: Number,
    address: String,
    gender: String,
    country: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);