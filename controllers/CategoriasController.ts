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