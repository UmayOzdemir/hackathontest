const functions = require("firebase-functions");
const app = require('express')();
const cors = require('cors');
app.use(cors());

const {
    sayHelloWorld,
} = require('./utilities/slackservice.js');

app.get("/sayHelloWorld", sayHelloWorld);

exports.api = functions.https.onRequest(app);
