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
    .post((req, res, next) => {
       
        let result = Policies.verification(req.header("Carreras-key"),"2cf0f3918bdf2fc59a596b470353e7b84a3a44c8c7ceb5d2264b7d3fd3d062bc8091f83f92289de806c04f28862227fd7989ab9c06f4777abbec75e7bc1e8336",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CarrerasController.create)

app.route('/api/carreras/:id')
    .get(CarrerasController.getCarreraById)
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Carreras-key"),"2cf0f3918bdf2fc59a596b470353e7b84a3a44c8c7ceb5d2264b7d3fd3d062bc8091f83f92289de806c04f28862227fd7989ab9c06f4777abbec75e7bc1e8336",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CarrerasController.update)
    .delete((req, res, next) => {
       
        let result = Policies.verification(req.header("Carreras-key"),"2cf0f3918bdf2fc59a596b470353e7b84a3a44c8c7ceb5d2264b7d3fd3d062bc8091f83f92289de806c04f28862227fd7989ab9c06f4777abbec75e7bc1e8336",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CarrerasController.del)

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
       
    let trustedIps = ['186.81.100.156','192.168.0.9'];
    let requestIP: string = req.connection.remoteAddress || '';
    //if(trustedIps.indexOf(requestIP) >= 0) {
        
        let result = Policies.verification(req.header("Categoria-key"),"450203b9374bdf50208ecdb5d55f8d4e9aa5547c5db1344a526b3db32ba4171f109c2913dab3976691933819ebf4c8e3396c69822e090cad37fbf2da896baa84",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }

    //} else {
        //res.status(401).json({ error: true, msg: "Not an Authorized IP" })
    //}
        
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
    .post((req, res, next) => {
       
        let result = Policies.verification(req.header("Campeones-key"),"91a52ff2eb354489a8962b9c3d4010e2e1088eaf93a4314b96980f1ff9e0a39a9512854936d9166f9a0e6ace27d685ae366e8ae5aa30e5e901626d72b973fafa",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CampeonesController.create)

app.route('/api/campeones/:id')
    .get(CampeonesController.getCampeonById)
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Campeones-key"),"91a52ff2eb354489a8962b9c3d4010e2e1088eaf93a4314b96980f1ff9e0a39a9512854936d9166f9a0e6ace27d685ae366e8ae5aa30e5e901626d72b973fafa",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CampeonesController.update)
    .delete((req, res, next) => {
       
        let result = Policies.verification(req.header("Campeones-key"),"91a52ff2eb354489a8962b9c3d4010e2e1088eaf93a4314b96980f1ff9e0a39a9512854936d9166f9a0e6ace27d685ae366e8ae5aa30e5e901626d72b973fafa",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CampeonesController.del)

app.route('/api/campeones/nombre/:piloto')
    .get(CampeonesController.getCampeonByNombre)

app.route('/api/campeones/:id/titulo')
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Campeones-key"),"91a52ff2eb354489a8962b9c3d4010e2e1088eaf93a4314b96980f1ff9e0a39a9512854936d9166f9a0e6ace27d685ae366e8ae5aa30e5e901626d72b973fafa",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CampeonesController.addTitulos)

app.route('/api/campeones/:id/equipo')
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Campeones-key"),"91a52ff2eb354489a8962b9c3d4010e2e1088eaf93a4314b96980f1ff9e0a39a9512854936d9166f9a0e6ace27d685ae366e8ae5aa30e5e901626d72b973fafa",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, CampeonesController.updateEquipo)




//RUTAS APUESTAS
app.route('/api/apuestas')
    .get(ApuestasController.apuestas)

app.route('/api/apuestas/:id')
    .get(ApuestasController.getApuestaById)
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Apuestas-key"),"6ebdf2af8803ec1c9699c5e5c4034d0037041ca04346e39a451872dfa407473549dd62ddca3397eb1b762b27a9d4bf29723c6c39f2b0b50111801bdb1dc98e26",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, ApuestasController.update)
    .delete((req, res, next) => {
       
        let result = Policies.verification(req.header("Apuestas-key"),"6ebdf2af8803ec1c9699c5e5c4034d0037041ca04346e39a451872dfa407473549dd62ddca3397eb1b762b27a9d4bf29723c6c39f2b0b50111801bdb1dc98e26",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, ApuestasController.del)


app.route('/api/apuestas/apostador/:apostador')
    .get(ApuestasController.getApuestaByApostador)

app.route('/api/apuestas/piloto/:piloto')
    .get(ApuestasController.getApuestaByPiloto)

app.route('/api/apuestas/valor/:valormin')
    .get(ApuestasController.getByValorMin)

app.route('/api/apuestas/carrera/:carrera')
    .get(ApuestasController.getByCarrera)

app.route('/api/apuestas/:id/estado')
    .put((req, res, next) => {
       
        let result = Policies.verification(req.header("Apuestas-key"),"6ebdf2af8803ec1c9699c5e5c4034d0037041ca04346e39a451872dfa407473549dd62ddca3397eb1b762b27a9d4bf29723c6c39f2b0b50111801bdb1dc98e26",req.headers.host,"localhost:3000");
        if (!result.error) {
            next();
        }else{
            res.status(result.status).json({ error: true, msg: result.msg });
        }
        
    }, ApuestasController.updateEstado)

app.get('/api', function (req, res) {
    res.send('API CARRERAS IS RUNNING');
});

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});


