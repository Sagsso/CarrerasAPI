import Apuesta from '../models/Apuesta';

module ApuestasService {


    export async function getAll(): Promise<any> {
        return await Apuesta.findAll('apuesta');
    }
    export async function getById(id: number): Promise<any> {
        return await Apuesta.findOne('apuesta', id);
    }


}

export default ApuestasService;