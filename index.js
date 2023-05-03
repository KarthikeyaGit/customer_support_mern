const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log("magic happens on port " + port);
})