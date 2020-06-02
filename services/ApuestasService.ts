import Apuesta from '../models/Apuesta';

module ApuestasService {


    export async function getAll(): Promise<any> {
        return await Apuesta.findAll('apuesta');
    }
    export async function getById(id: number): Promise<any> {
        return await Apuesta.findOne('apuesta', id);
    }
    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.apuesta (apostador, valor, nombre_carrera, piloto_apostado, estado) VALUES ?`;
        return await Apuesta.create(sql, values);
    }

    export async function del(id: number): Promise<any> {
        return await Apuesta.delete('apuesta', id);
    }


}

export default ApuestasService;