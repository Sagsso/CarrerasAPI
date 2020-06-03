import Apuesta from '../models/Apuesta';

module ApuestasService {


    export async function getAll(): Promise<any> {
        return await Apuesta.findAll('apuesta');
    }
    export async function getById(id: number): Promise<any> {
        return await Apuesta.findOne('apuesta', id);
    }
    export async function create(values: Array<any>): Promise<any> {
        let sql = `INSERT INTO carreras.apuesta (apostador, valor, nombre_carrera, piloto_apostado, estado) VALUES ?`;
        return await Apuesta.create(sql, values);
    }

    export async function update(id: number, apostador: string, valor: number, nombre_carrera: string, pilotoApostado: string, estado: string): Promise<any> {
        const query = `UPDATE carreras.apuesta SET apostador = "${apostador}", valor = ${valor}, nombre_carrera = "${nombre_carrera}",piloto_apostado = "${pilotoApostado}", estado = "${estado}" WHERE id = ${id}`
        return await Apuesta.execQuery(query);
    }

    export async function del(id: number): Promise<any> {
        return await Apuesta.delete('apuesta', id);
    }

    export async function getByApostador(apostador: string): Promise<any> {
        const query = `SELECT * FROM carreras.apuesta WHERE apostador = "${apostador}"`;
        return await Apuesta.execQuery(query);
    }

    export async function getByPiloto(pilotoApostado: string): Promise<any> {
        const query = `SELECT * FROM carreras.apuesta WHERE piloto_apostado = "${pilotoApostado}"`
        return await Apuesta.execQuery(query);
    }

    export async function getByValorMin(valorMin: number): Promise<any> {
        const query = `SELECT * FROM carreras.apuesta WHERE valor >= ${valorMin}`;
        return await Apuesta.execQuery(query);
    }

    export async function getByCarrera(carrera: string): Promise<any> {
        const query = `SELECT * FROM carreras.apuesta WHERE carrera = "${carrera}"`;
        return await Apuesta.execQuery(query);
    }

    export async function updateEstado(id:number,estado: string): Promise<any> {
        const query = `UPDATE carreras.apuesta SET estado = "${estado}" WHERE id = ${id}`;
        return await Apuesta.execQuery(query);
    }


}

export default ApuestasService;