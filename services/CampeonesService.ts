import Campeon from '../models/Campeon';

module CampeonsService {


    export async function getAll(): Promise<any> {
        return await Campeon.findAll('campeon');
    }
    export async function getById(id: number): Promise<any> {
        return await Campeon.findOne('campeon', id);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.campeon (piloto, titulos, equipo) VALUES ?`;
        return await Campeon.create(sql, values);
    }
    export async function del(id: number): Promise<any> {
        return await Campeon.delete('campeon', id);
    }


}

export default CampeonsService;