import { Request, Response } from "express";
import CategoriasService from "../services/CategoriasService";


export async function categorias(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getAll();
    res.status(200).json(categorias);
}

export async function getCarreraById(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getById(+req.params.id);
    res.status(200).json(categorias);
}

export async function getCarreraByNombre(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getByNombre(req.params.nombre);
    res.status(200).json(categorias);
}

export async function create(req: Request, res: Response) {
    const marcasAdmitidasStr = req.body.marcasAdmitidas.toString();

    let values = [[req.body.nombre, req.body.descripcion, req.body.capacidad, marcasAdmitidasStr]];
    
    const categorias: any = await CategoriasService.create(values);
    res.status(200).json(categorias);
}

export async function updateCapacidad(req: Request, res: Response) {
    const categorias: any = await CategoriasService.updateCapacidad(+req.params.id, req.body.capacidad);
    res.status(200).json(categorias);
}

export async function updateMarcasAdmitidas(req: Request, res: Response) {
    const categorias: any = await CategoriasService.updateMarcasAdmitidas(+req.params.id, req.body.marcasAdmitidas);
    res.status(200).json(categorias);
}

