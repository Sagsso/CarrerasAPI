import { Request, Response } from "express";
import ApuestasService from "../services/ApuestasService";


export async function apuestas(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getAll();
    res.status(200).json(apuestas);
}

export async function getCarreraById(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getById(+req.params.id);
    res.status(200).json(apuestas);
}