const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

const routes = require('./routes');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});