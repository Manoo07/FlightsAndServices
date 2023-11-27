const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const CityRepository = require('./repository/city-repository'); 
const ApiRoutes = require('./routes/index')

require('dotenv').config();

const SetUpAndStartServer = async ()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    
    app.listen(PORT ,async ()=>{
        console.log(`Server started at :${PORT}`);
        const repo = new CityRepository();
        // repo.createCity({name:'New delhi'});
    })
}
SetUpAndStartServer();
