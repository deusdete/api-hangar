const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./routes');
const { Z_ASCII } = require('zlib');

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use('/api/v1', router);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started!')
});