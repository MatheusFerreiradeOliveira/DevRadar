const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const routes = require('./routes.js');
const http = require('http');
const { setupWebsocket } = require('./webSocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://matheus:sxdekzke@cluster0-nhymb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json())
app.use(routes);

//Query Params: vem com a ?
//Route Params: os :id
 
server.listen(3333);

