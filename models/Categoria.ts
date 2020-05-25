import Model from '../libs/Model';
import ICategoria from '../interfaces/ICategoria';

export default class Carrera extends Model implements ICategoria {

    id: number | null = null;
    nombre: string;
    descripcion: string;
    capacidad: number;
    marcasAdmitidas: Array<any>;

    constructor(nombre: string, descripcion: string, capacidad: number, marcasAdmitidas: Array<any>) {
        super();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.capacidad = capacidad;
        this.marcasAdmitidas = marcasAdmitidas;
    }
}