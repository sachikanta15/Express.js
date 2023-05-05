const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const root = async (req, res) => {
    res.send("Welcome to TO DO APP");
}

const register = async (req, res) => {
    const { name, email, password } = req.body;

    let existingUser = await User.findOne({ email });

    if (existingUser)
        return res.status(404).json({
            success: false,
            message: `${existingUser}'s User Already Exists`
        });

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET);

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    }).json({
        success: true,
        message: "Registered Successfully"
    });
}

const getallUsers = async (req, res) => {

};

const login = async (req, res) => {

};

const getUserDetails = async (req, res) => {

}

module.exports = { root, getallUsers, login, getUserDetails, register };
