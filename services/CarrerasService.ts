import Carrera from '../models/Carrera';

module CarrerasService {


    export async function getAll(): Promise<any> {
        return await Carrera.findAll('carrera');
    }
    export async function getById(id: number): Promise<any> {
        return await Carrera.findOne('carrera', id);
    }


}

export default CarrerasService;