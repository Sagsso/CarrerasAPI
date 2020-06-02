import { Request, Response } from "express";
import CampeonesService from "../services/CampeonesService";


export async function campeones(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getAll();
    res.status(200).json(campeones);
}

export async function getCarreraById(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getById(+req.params.id);
    res.status(200).json(campeones);
}

export async function create(req: Request, res: Response) {

    const titulosStr = req.body.titulos.toString();

    let values = [[req.body.piloto, titulosStr, req.body.equipo]];

    const campeones: any = await CampeonesService.create(values);
    res.status(200).json(campeones);
}