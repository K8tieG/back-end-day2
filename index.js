const express = require('express');
const cors = require('cors');
const app = express();
//bring in controller files
const ctrl = require('./controller');


app.use(cors());
app.use(express.json());

//setting up endpoints
app.get('/api/houses', ctrl.getHouses);

app.post('/api/houses', ctrl.createHouse);

app.put('/api/houses/:id', ctrl.updateHouse);

app.delete('/api/houses/:id', ctrl.deleteHouse);






app.listen(4004,function(){
    console.log('Server is running on 4004')
});