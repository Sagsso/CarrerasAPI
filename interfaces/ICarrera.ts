
export default interface ICarrera{
    id: number | null,
    nombre: string,
    numParticipantes: number,
    participantes: Array<any>,
    categoria: string
}