const db = require('./db.json')

let foodId = 4

const foodList = ["Micky D's", "Burger King", "Sushi", "Penut butter and jelly", "Ham n Cheese"]

module.exports = {
    getFood: (req, res) => {
        res.status(200).send(foodList)
    },

    createFood: (req, res) => {
        foodList.push(req.body)
        console.log("help me")
        res.status(200).send()

    }
}