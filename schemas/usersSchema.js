// full name, role (House Owner or
//     House Renter) (it must be selected as an option), phone number, email, and password

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required!"]
    },
    role: {
        type: String,
        required: [true, "Role is required!"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;