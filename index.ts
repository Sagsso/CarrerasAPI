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
    .post(CarrerasController.create)

app.route('/api/carreras/:id')
    .get(CarrerasController.getCarreraById)

//RUTAS CATEGORÍAS
app.route('/api/categorias')
    .get(CategoriasController.categorias)
    .post(CategoriasController.create)
    
app.route('/api/categorias/:id')
    .get(CategoriasController.getCarreraById)

app.route('/api/categorias/:id/capacidad')
    .put(CategoriasController.updateCapacidad)

app.route('/api/categorias/nombre/:nombre')
    .get(CategoriasController.getCarreraByNombre)

app.route('/api/categorias/:id/marca')
.put(CategoriasController.updateMarcasAdmitidas)

app.route('/api/categorias/:id')
    .put(CategoriasController.update)
//Rutas campeones
app.route('/api/campeones')
    .get(CampeonesController.campeones)
    .post(CampeonesController.create)

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
