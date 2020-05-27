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

    getDescripcion() {
        return this.descripcion;
    }

    setDescripcion(value: string) {
        this.descripcion = value;
    }

    getCapacidad() {
        return this.capacidad;
    }

    setCapacidad(value: number) {
        this.capacidad = value;
    }

    getMarcasAdmitidas() {
        return this.marcasAdmitidas;
    }

    setMarcasAdmitidas(value: Array<string>) {
        this.marcasAdmitidas = value;
    }
}