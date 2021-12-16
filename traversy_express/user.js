const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ id: 12, name: "Zaur", id: 1, name: "Mas" })
})

router.get('/:id', (req, res) => {
    const findData = [{ id: 12, name: "Zaur", id: 1, name: "Mas" }].find(el => el.id === +req.params.id)

    if (!findData) {
        res.status(408).json({ msg: "not find" })
        return
    }
    res.json(findData)
})


router.post('/', (req, res) => {
    res.json(req.body)
})

module.exports = router