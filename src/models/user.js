const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },

}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Users', UserSchema);
