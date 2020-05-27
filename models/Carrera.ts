import Model from '../libs/Model';
import ICarrera from '../interfaces/ICarrera';
// import IModel from '../interfaces/IModel';

export default class Carrera extends Model implements ICarrera {

    id: number | null = null;
    nombre: string;
    numParticipantes: number;
    participantes: Array<string>;
    categoria: string;

    constructor(nombre: string, numParticipantes: number, participantes: Array<any>, categoria: string) {
        super();
        this.nombre = nombre;
        this.numParticipantes = numParticipantes;
        this.participantes = participantes;
        this.categoria = categoria;
    }

    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(value: string) {
        this.nombre = value;
    }

    getNumParticipantes() {
        return this.numParticipantes;
    }

    setNumParticipantes(value: number) {
        this.numParticipantes = value;
    }

    getParticipantes() {
        return this.participantes;
    }

    setParticipantes(value: Array<string>) {
        this.participantes = value;
    }
    getCategoria() {
        return this.categoria;
    }

    setCategoria(value: string) {
        this.categoria = value;
    }

    static async findAll(): Promise<any> {
        let query = `SELECT * FROM apicarre_carreras.carrera`;
        const carreras = await Carrera.execQuery(query);
        return carreras;
    };
}