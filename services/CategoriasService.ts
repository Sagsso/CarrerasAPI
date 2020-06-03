import Categoria from '../models/Categoria';

module CategoriasService {


    export async function getAll(): Promise<any> {
        return await Categoria.findAll('categoria');
    }

    export async function getById(id: number): Promise<any> {
        return await Categoria.findOne('categoria', id);
    }

    export async function getByNombre(nombre: string): Promise<any> {
        const query = `SELECT * FROM apicarre_carreras.categoria WHERE nombre = "${nombre}"`
        return await Categoria.execQuery(query);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO apicarre_carreras.categoria (nombre, descripcion, capacidad, marcas_admitidas) VALUES ?`;
        return await Categoria.create(sql, values);
    }

    export async function del(id: number): Promise<any> {
        return await Categoria.delete('categoria', id);
    }

    export async function update(id: number, nombre: string, descripcion: string, capacidad: number, marcasAdmitidas: string): Promise<any> {
        const query = `UPDATE apicarre_carreras.categoria SET nombre = "${nombre}", descripcion = "${descripcion}", capacidad = ${capacidad}, marcas_admitidas = "${marcasAdmitidas}" WHERE id = ${id}`
        return await Categoria.execQuery(query);
    }

    export async function updateCapacidad(id: number, capacidad: number): Promise<any> {
        const query = `UPDATE apicarre_carreras.categoria SET capacidad = ${capacidad} WHERE id = ${id}`
        return await Categoria.execQuery(query);
    }

    export async function updateMarcasAdmitidas(id: number, newMarca: string): Promise<any> {

        const query1 = `SELECT marcas_admitidas FROM apicarre_carreras.categoria WHERE id = ${id}`
        const allMarcas: any = await Categoria.execQuery(query1);
        console.log(allMarcas);
        let arrayMarcas: string = `${allMarcas[0].marcas_admitidas},${newMarca}`;

        const query2 = `UPDATE apicarre_carreras.categoria SET marcas_admitidas = "${arrayMarcas}" WHERE id = ${id}`
        return await Categoria.execQuery(query2);
    }


}

export default CategoriasService;