const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpf: String,
    image_url: String,
    points: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    history: {
        total: {
            type: Number,
            default: 0
        },
        pubs: [{String, Number}]
    }
});

module.exports = mongoose.model("User", UserSchema);