import { Request, Response } from "express";
import ApuestasService from "../services/ApuestasService";


export async function apuestas(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getAll();
    res.status(200).json(apuestas);
}

export async function getApuestaById(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getById(+req.params.id);
    res.status(200).json(apuestas);
}

export async function create(req: Request, res: Response) {

    let values = [[req.body.apostador, req.body.valor, req.body.nombre_carrera, req.body.piloto_apostado, req.body.estado]];

    const apuestas: any = await ApuestasService.create(values);
    res.status(200).json(apuestas);
}