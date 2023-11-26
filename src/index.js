const express = require('express');
const { PORT } = require('./config/serverConfig');
require('dotenv').config();
const SetUpAndStartServer = async ()=>{
    // create the express object
    // const PORT = 3000;
    const app = express();
    app.listen(PORT ,()=>{
        console.log(`Server started at :${PORT}`);
    })
}
SetUpAndStartServer();

