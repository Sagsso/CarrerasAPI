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

export async function getApuestaByApostador(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getByApostador(req.params.apostador);
    res.status(200).json(apuestas);
}
export async function getApuestaByPiloto(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getByPiloto(req.params.piloto);
    res.status(200).json(apuestas);
}
export async function getByValorMin(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getByValorMin(+req.params.valormin);
    res.status(200).json(apuestas);
}
export async function getByCarrera(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.getByCarrera(req.params.carrera);
    res.status(200).json(apuestas);
}
export async function updateEstado(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.updateEstado(+req.params.id, req.body.estado);
    res.status(200).json(apuestas);
}
export async function update(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.update(+req.params.id, req.body.apostador, +req.body.valor, req.body.nombre_carrera, req.body.piloto_apostado,req.body.estado);
    res.status(200).json(apuestas);
}

export async function create(req: Request, res: Response) {

    let values = [[req.body.apostador, +req.body.valor, req.body.nombre_carrera, req.body.piloto_apostado, req.body.estado]];

    const apuestas: any = await ApuestasService.create(values);
    if (!apuestas.error) {
        res.status(200).json(apuestas);
    } else {
        res.status(400).json(apuestas);
    }
}

export async function del(req: Request, res: Response) {
    const apuestas: any = await ApuestasService.del(+req.params.id);
    res.status(200).json(apuestas);
}