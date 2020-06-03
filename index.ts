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

//Policies
import Policies from "./sso/Policies";

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

app.route('/api/carreras/nombre/:carrera')
    .get(CarrerasController.getByNombreCarrera)

//RUTAS CATEGORÍAS
app.route('/api/categorias')
    .get(CategoriasController.categorias) //No auth
    .post((req, res, next) => {
       
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CategoriasController.create)
    
app.route('/api/categorias/:id')
    .get(CategoriasController.getCategoriaById)
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CategoriasController.update)
    .delete((req, res, next) => {
       
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CategoriasController.del)

app.route('/api/categorias/:id/capacidad')
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CategoriasController.updateCapacidad)

app.route('/api/categorias/nombre/:nombre')
    .get(CategoriasController.getCategoriaByNombre)

app.route('/api/categorias/:id/marca')
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CategoriasController.updateMarcasAdmitidas)



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


