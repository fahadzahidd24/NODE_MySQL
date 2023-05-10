const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db');

app.use(bodyParser.json());


app.use('/', (req, res) => {
    res.send('Hello World');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})