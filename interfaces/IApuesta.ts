export default interface IApuesta {
    id: number | null,
    apostador: string,
    valor: number,
    nombreCarrera: string,
    pilotoApostado: string,
    estado: boolean | null
}