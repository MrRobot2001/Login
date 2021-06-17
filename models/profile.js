const mongoose = require('mongoose');


const proflieSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        maxLength: 55
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: { type: String, required: true, unique: true},
    user: {type: mongoose.Types.ObjectId,ref: 'user'}
},{
    timestamps: true
})

module.exports = mongoose.model('profile', proflieSchema)