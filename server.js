const express = require('express');
const app = express();
// const path = require('path');

const PORT = process.env.PORT || 2020


app.use(express.static('./docs'));

app.listen(2020);
