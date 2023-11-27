const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const CityRepository = require('./repository/city-repository'); 
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.use(urlencoded({extended:true}));
const SetUpAndStartServer = async ()=>{
    const app = express();
    app.listen(PORT ,async ()=>{
        console.log(`Server started at :${PORT}`);
        const repo = new CityRepository();
        // repo.createCity({name:'New delhi'});
    })
}
SetUpAndStartServer();
