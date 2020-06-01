import Campeon from '../models/Campeon';

module CampeonsService {


    export async function getAll(): Promise<any> {
        return await Campeon.findAll('campeon');
    }
    export async function getById(id: number): Promise<any> {
        return await Campeon.findOne('campeon', id);
    }


}

export default CampeonsService;