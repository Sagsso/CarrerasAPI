import Model from '../libs/Model';
import IApuesta from '../interfaces/IApuesta';

export default class Carrera extends Model implements IApuesta {

    id: number | null = null;
    apostador: string;
    valor: number;
    nombreCarrera: string;
    pilotoApostado: string;
    estado: boolean | null = null;

    constructor(apostador: string, valor: number, nombreCarrera: string, pilotoApostado: string) {
        super();
        this.apostador = apostador;
        this.valor = valor;
        this.nombreCarrera = nombreCarrera;
        this.pilotoApostado = pilotoApostado;
    }

    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getApostador() {
        return this.apostador;
    }

    setApostador(value: string) {
        this.apostador = value;
    }

    getValor() {
        return this.valor;
    }

    setValor(value: number) {
        this.valor = value;
    }

    getNombreCarrera() {
        return this.nombreCarrera;
    }

    setNombreCarrera(value: string) {
        this.nombreCarrera = value;
    }

    getPilotoApostado() {
        return this.pilotoApostado;
    }

    setPilotoApostado(value: string) {
        this.pilotoApostado = value;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(value: boolean) {
        this.estado = value;
    }


}