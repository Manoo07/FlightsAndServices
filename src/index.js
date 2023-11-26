const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

require('dotenv').config();

app.use(bodyParser.json());
app.use(urlencoded({extended:true}));
const SetUpAndStartServer = async ()=>{
    const app = express();
    app.listen(PORT ,()=>{
        console.log(`Server started at :${PORT}`);
    })
}
SetUpAndStartServer();
