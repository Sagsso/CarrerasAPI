import express from "express";
import bodyParser from "body-parser";
const app = express();

const { port } = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as CarrerasController from "./controllers/CarrerasController";

app.route('/api/carreras')
    .get(CarrerasController.carreras)

app.route('/api/carreras/:id')
    .get(CarrerasController.getCarreraById)

app.get('/api', function (req, res) {
    res.send('API CARRERAS IS RUNNING');
});

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
