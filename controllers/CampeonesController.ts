import { Request, Response } from "express";
import CampeonesService from "../services/CampeonesService";


export async function campeones(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getAll();
    res.status(200).json(campeones);
}

export async function getCampeonById(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getById(+req.params.id);
    res.status(200).json(campeones);
}

export async function getCampeonByNombre(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getByNombre(req.params.piloto);
    res.status(200).json(campeones);
}

export async function create(req: Request, res: Response) {

    const titulosStr = req.body.titulos.toString();

    let values = [[req.body.piloto, titulosStr, req.body.equipo]];

    const campeones: any = await CampeonesService.create(values);
    if (!campeones.error) {
        res.status(200).json(campeones);
    } else {
        res.status(400).json(campeones);
    }
}

export async function update(req: Request, res: Response) {
    const titulosStr = req.body.titulos.toString();

    const campeones: any = await CampeonesService.update(+req.params.id, req.body.piloto, titulosStr, req.body.equipo);
    res.status(200).json(campeones);
}

export async function addTitulos(req: Request, res: Response) {
    const campeones: any = await CampeonesService.addTitulos(+req.params.id, req.body.titulo);
    res.status(200).json(campeones);
}
export async function updateEquipo(req: Request, res: Response) {
    const campeones: any = await CampeonesService.updateEquipo(+req.params.id, req.body.equipo);
    res.status(200).json(campeones);
}

export async function del(req: Request, res: Response) {
    const campeones: any = await CampeonesService.del(+req.params.id);
    res.status(200).json(campeones);
}