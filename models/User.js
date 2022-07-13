const{ model, Schema } = require('mongoose');

const User = new Schema({
    login: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    photoURL: {type: String},
    age: {type:String},
    gender: {type: String},
    name: {type: String}
})

module.exports = model('user', User);