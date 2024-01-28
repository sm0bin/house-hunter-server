const express = require('express');
const router = express.Router();
const User = require('../schemas/usersSchema');
const jwt = require("jsonwebtoken");
const verifyToken = require('../middlewares/verifyToken');

router.post('/signup', async (req, res) => {
    // const { fullName, role, phoneNumber, email, password } = req.body;
    try {
        const user = await User.create(req.body);
        console.log(req.body);
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        console.log(err);
        res.status(422).send(err);
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(422).send({ message: "Email and password are required!" });
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(422).send({ message: "Invalid email or password!" });
        if (user.password !== password)
            return res.status(422).send({ message: "Invalid email or password!" });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        console.log(err);
        res.status(422).send({ message: "Invalid email or password!" });
    }
})

router.get('/me', verifyToken, async (req, res) => {
    try {
        // console.log("hitting");
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];;
        if (!token)
            return res.status(401).send({ message: "You must be logged in!" });
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(underToken);
        const user = await User.findById(userId).select("fullName role phoneNumber email");
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(401).send({ message: "You must be logged in!" });
    }
})

module.exports = router;
