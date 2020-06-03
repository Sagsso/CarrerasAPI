import Campeon from '../models/Campeon';

module CampeonsService {


    export async function getAll(): Promise<any> {
        return await Campeon.findAll('campeon');
    }
    export async function getById(id: number): Promise<any> {
        return await Campeon.findOne('campeon', id);
    }

    export async function getByNombre(nombre: string): Promise<any> {
        const query = `SELECT * FROM carreras.campeon WHERE piloto = "${nombre}"`
        return await Campeon.execQuery(query);
    }

    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.campeon (piloto, titulos, equipo) VALUES ?`;
        return await Campeon.create(sql, values);
    }

    export async function update(id: number, piloto: string, titulos: string, equipo: string): Promise<any> {
        const query = `UPDATE carreras.campeon SET piloto = "${piloto}", titulos = "${titulos}", equipo = "${equipo}" WHERE id = ${id}`
        return await Campeon.execQuery(query);
    }

    export async function del(id: number): Promise<any> {
        return await Campeon.delete('campeon', id);
    }

    export async function addTitulos(id: number, newTitulo: string): Promise<any> {

        const query1 = `SELECT titulos FROM carreras.campeon WHERE id = ${id}`
        const allTitulos: any = await Campeon.execQuery(query1);
        console.log(allTitulos);
        let arrayTitulos: string = `${allTitulos[0].titulos},${newTitulo}`;

        const query2 = `UPDATE carreras.campeon SET titulos = "${arrayTitulos}" WHERE id = ${id}`
        return await Campeon.execQuery(query2);
    }


    export async function updateEquipo(id: number,  titulos: string): Promise<any> {
        const query = `UPDATE carreras.campeon SET equipo = "${titulos}" WHERE id = ${id}`
        return await Campeon.execQuery(query);
    }
}

export default CampeonsService;