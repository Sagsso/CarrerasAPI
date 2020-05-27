import Carrera from '../models/Carrera';

module GodsService {


    export async function getAll(): Promise<any> {
        return await Carrera.findAll();
    }


}

export default GodsService;