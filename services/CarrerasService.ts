import Carrera from '../models/Carrera';

module CarrerasService {


    export async function getAll(): Promise<any> {
        return await Carrera.findAll('carrera');
    }
    export async function getById(id: number): Promise<any> {
        return await Carrera.findOne('carrera', id);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.carrera (nombre, numParticipantes, participantes, categoria) VALUES ?`;
        return await Carrera.create(sql, values);
    }
    
    export async function del(id: number): Promise<any> {
        return await Carrera.delete('carrera', id);
    }

}

export default CarrerasService;