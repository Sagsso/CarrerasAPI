import Categoria from '../models/Categoria';

module CategoriasService {


    export async function getAll(): Promise<any> {
        return await Categoria.findAll('categoria');
    }

    export async function getById(id: number): Promise<any> {
        return await Categoria.findOne('categoria', id);
    }

    export async function getByNombre(nombre: string): Promise<any> {
        const query = `SELECT * FROM carreras.categoria WHERE nombre = "${nombre}"`
        return await Categoria.execQuery(query);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.categoria (nombre, descripcion, capacidad, marcas_admitidas) VALUES ?`;
        return await Categoria.create(sql, values);
    }

    export async function del(id: number): Promise<any> {
        return await Categoria.delete('categoria', id);
    }

    export async function updateCapacidad(id: number, capacidad: number): Promise<any> {
        const query = `UPDATE carreras.categoria SET capacidad = ${capacidad} WHERE id = ${id}`
        return await Categoria.execQuery(query);
    }

    export async function updateMarcasAdmitidas(id: number, newMarca: string): Promise<any> {

        let arrayMarcas: string = '';

        const query = `UPDATE carreras.categoria SET marcas_admitidas = ${arrayMarcas} WHERE id = ${id}`
        return await Categoria.execQuery(query);
    }


}

export default CategoriasService;