import { Request, Response } from "express";
import CarrerasService from "../services/CarrerasService";


export async function carreras(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getAll();
    res.status(200).json(carreras);
}

export async function getCarreraById(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getById(+req.params.id);
    res.status(200).json(carreras);
}

export async function create(req: Request, res: Response) {

    const participantesStr = req.body.participantes.toString();

    let values = [[req.body.nombre, req.body.numParticipantes, participantesStr, req.body.categoria]];

    const carreras: any = await CarrerasService.create(values);
    res.status(200).json(carreras);
}