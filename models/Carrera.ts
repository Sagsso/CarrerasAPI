import Model from '../libs/Model';
import ICarrera from '../interfaces/ICarrera';

export default class Carrera extends Model implements ICarrera {

    id: number | null = null;
    nombre: string;
    numParticipantes: number;
    participantes: Array<any>;
    categoria: string;

    constructor(nombre: string, numParticipantes: number, participantes: Array<any>, categoria: string) {
        super();
        this.nombre = nombre;
        this.numParticipantes = numParticipantes;
        this.participantes = participantes;
        this.categoria = categoria;
    }
}