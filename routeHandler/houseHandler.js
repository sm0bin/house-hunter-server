const express = require('express');
const router = express.Router();
const House = require('../schemas/housesSchema');
const jwt = require("jsonwebtoken");
const verifyToken = require('../middlewares/verifyToken');

router.get('/', async (req, res) => {
    try {
        const page = req.query.page ? req.query.page : 1;
        const limit = req.query.limit ? req.query.limit : 6;
        console.log(page, limit);
        const houses = await House.find().limit(limit * 1).skip((page - 1) * limit);
        res.send({ houses, totalPages: Math.ceil(houses.length / limit) });
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: "Houses not found!" });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const house = await House.findById(req.params.id);
        res.send(house);
    } catch (err) {
        console.log(err);
        res.status(404).send({ message: "House not found!" });
    }
})

router.post('/', verifyToken, async (req, res) => {
    try {
        const house = await House.create(req.body);
        res.send(house);
    } catch (err) {
        console.log(err);
        res.status(422).send(err);
    }
})

// router.put('/:id', verifyToken, async (req, res) => {
//     try {
//         const
//     } catch (err) {
//         console.log(err);
//         res.status(422).send(err);
//     }
// })

module.exports = router;