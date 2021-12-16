const db = require('./db.json')

let motivationId = 4

const foodList = ["Micky D's", "Burger King", "Sushi", "Penut butter and jelly", "Ham n Cheese"]

module.exports = {
    getMotivation: (req, res) => {
        res.status(200).send(foodList)
    },

    createMotivation: (req, res) => {
        motivationList.push(req.body)
        console.log("help me")
        res.status(200).send()

    }
}