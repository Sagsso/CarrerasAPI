
export default interface ICategoria {
    id: number | null,
    nombre: string,
    descripcion: string,
    capacidad: number,
    marcasAdmitidas: Array<any>
}