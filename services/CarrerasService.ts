import Carrera from '../models/Carrera';

module CarrerasService {


    export async function getAll(): Promise<any> {
        return await Carrera.findAll('carrera');
    }
    export async function getById(id: number): Promise<any> {
        return await Carrera.findOne('carrera', id);
    }

    export async function getByCategoria(categoria: string): Promise<any> {
        const query = `SELECT * FROM carreras.carrera WHERE categoria = "${categoria}"`
        return await Carrera.execQuery(query);
    }
    export async function getByMinParticipantes(numParticipantes: number): Promise<any> {
        const query = `SELECT * FROM carreras.carrera WHERE numParticipantes >= ${numParticipantes}`
        return await Carrera.execQuery(query);
    }
    export async function getByParticipante(participante: string): Promise<any> {
        const query = `SELECT * FROM carreras.carrera WHERE participantes LIKE "%${participante}%"`
        return await Carrera.execQuery(query);
    }
    export async function getByNombreCarrera(nombre: string): Promise<any> {
        const query = `SELECT * FROM carreras.carrera WHERE nombre = "${nombre}"`
        return await Carrera.execQuery(query);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.carrera (nombre, numParticipantes, participantes, categoria) VALUES ?`;
        return await Carrera.create(sql, values);
    }

    export async function update(id: number, nombre: string, numParticipantes: number, participantes: number, categoria: string): Promise<any> {
        const sql = `nombre = "${nombre}", numParticipantes = ${numParticipantes}, participantes = "${participantes}", categoria = "${categoria}" WHERE id = ${id}`
        return await Carrera.update("carrera", sql);
    }
    
    export async function del(id: number): Promise<any> {
        return await Carrera.delete('carrera', id);
    }

}

export default CarrerasService;