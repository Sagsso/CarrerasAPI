import express from "express";
import bodyParser from "body-parser";
const app = express();

const { port } = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as CarrerasController from "./controllers/CarrerasController";
import * as CategoriasController from "./controllers/CategoriasController";
import * as CampeonesController from "./controllers/CampeonesController";
import * as ApuestasController from "./controllers/ApuestasController";

//Rutas carreras
app.route('/api/carreras')
    .get(CarrerasController.carreras)

app.route('/api/carreras/:id')
    .get(CarrerasController.getCarreraById)

//Rutas categorías
app.route('/api/categorias')
    .get(CategoriasController.categorias)

app.route('/api/categorias/:id')
    .get(CategoriasController.getCarreraById)

//Rutas campeones
app.route('/api/campeones')
    .get(CampeonesController.campeones)

app.route('/api/campeones/:id')
    .get(CampeonesController.getCarreraById)

//Rutas apuestas
app.route('/api/apuestas')
    .get(ApuestasController.apuestas)

app.route('/api/apuestas/:id')
    .get(ApuestasController.getCarreraById)

app.get('/api', function (req, res) {
    res.send('API CARRERAS IS RUNNING');
});


app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
