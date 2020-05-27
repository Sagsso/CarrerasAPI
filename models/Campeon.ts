import Model from '../libs/Model';
import ICampeon from '../interfaces/ICampeon';

export default class Carrera extends Model implements ICampeon {

    id: number | null = null;
    piloto: string;
    titulos: Array<any>;
    equipo: string;

    constructor(piloto: string, titulos: Array<any>, equipo: string) {
        super();
        this.piloto = piloto;
        this.titulos = titulos;
        this.equipo = equipo;
    }

    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getPiloto() {
        return this.piloto;
    }

    setPiloto(value: string) {
        this.piloto = value;
    }

    getTitulos() {
        return this.titulos;
    }

    setTitulos(value: Array<any>) {
        this.titulos = value;
    }

    getEquipo() {
        return this.equipo;
    }

    setEquipo(value: string) {
        this.equipo = value;
    }

}
