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

