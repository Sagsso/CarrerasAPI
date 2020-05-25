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
}