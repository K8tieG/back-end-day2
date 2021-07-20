const houses = require('./db.json');

const houseId = 4;
console.log(houses)
module.exports = {
    getHouses:(req, res) => res.status(200).send(houses),

    deleteHouse: function(req, res){
        const { id } = req.params;
        const tgtIndex = houses.findIndex(function(houseObj){
            return houseObj.id === +id;
        });
        houses.splice(tgtIndex, 1);
        res.status(200).send(houses);

    },
    
    createHouse: function(req, res){
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    
    updateHouse: function (req, res){
        const id = +req.params.id
        const { type } = req.body;
        const tgtIndex = houses.findIndex(function(houseObj){
            return houseObj.id === id;
        })
        if(type === 'plus'){
            houses[tgtIndex].price+=10000;
            res.status(200).send(houses)
        }else if(type === 'minus'){
            houses[tgtIndex].price-=10000;
            res.status(200).send(houses)
        }else{
            res.status(400).send('Values should be plus or minus')
        }
    }
}
