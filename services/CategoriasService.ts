import Categoria from '../models/Categoria';

module CategoriasService {


    export async function getAll(): Promise<any> {
        return await Categoria.findAll('categoria');
    }
    export async function getById(id: number): Promise<any> {
        return await Categoria.findOne('categoria', id);
    }


}

export default CategoriasService;