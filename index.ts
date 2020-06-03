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

//RUTAS CARRERAS
app.route('/api/carreras')
    .get(CarrerasController.carreras)
    .post(CarrerasController.create)

app.route('/api/carreras/:id')
    .get(CarrerasController.getCarreraById)
    .put(CarrerasController.update)
    .delete(CarrerasController.del)

app.route('/api/carreras/categoria/:categoria')
    .get(CarrerasController.getByCategoria)

app.route('/api/carreras/cantidad/:numParticipantes')
    .get(CarrerasController.getByMinParticipantes)

app.route('/api/carreras/participante/:participante')
    .get(CarrerasController.getByParticipante)

//RUTAS CATEGORÍAS
app.route('/api/categorias')
    .get(CategoriasController.categorias)
    .post(CategoriasController.create)
    
app.route('/api/categorias/:id')
    .get(CategoriasController.getCategoriaById)
    .put(CategoriasController.update)
    .delete(CategoriasController.del)

app.route('/api/categorias/:id/capacidad')
    .put(CategoriasController.updateCapacidad)

app.route('/api/categorias/nombre/:nombre')
    .get(CategoriasController.getCategoriaByNombre)

app.route('/api/categorias/:id/marca')
.put(CategoriasController.updateMarcasAdmitidas)



//RUTAS CAMPEONES
app.route('/api/campeones')
    .get(CampeonesController.campeones)
    .post(CampeonesController.create)

app.route('/api/campeones/:id')
    .get(CampeonesController.getCampeonById)
    .put(CampeonesController.update)
    .delete(CampeonesController.del)

app.route('/api/campeones/nombre/:piloto')
    .get(CampeonesController.getCampeonByNombre)

app.route('/api/campeones/:id/titulo')
    .put(CampeonesController.addTitulos)

app.route('/api/campeones/:id/equipo')
    .put(CampeonesController.updateEquipo)




//RUTAS APUESTAS
app.route('/api/apuestas')
    .get(ApuestasController.apuestas)

app.route('/api/apuestas/:id')
    .get(ApuestasController.getApuestaById)
    .put(ApuestasController.update)
    .delete(ApuestasController.del)


app.route('/api/apuestas/apostador/:apostador')
    .get(ApuestasController.getApuestaByApostador)

app.route('/api/apuestas/piloto/:piloto')
    .get(ApuestasController.getApuestaByPiloto)

app.route('/api/apuestas/valor/:valormin')
    .get(ApuestasController.getByValorMin)

app.route('/api/apuestas/carrera/:carrera')
    .get(ApuestasController.getByCarrera)

app.route('/api/apuestas/:id/estado')
    .put(ApuestasController.updateEstado)

app.get('/api', function (req, res) {
    res.send('API CARRERAS IS RUNNING');
});


app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
