import { Request, Response } from "express";
import CarrerasService from "../services/CarrerasService";


export async function carreras(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getAll();
    sendGetJson(req, res, carreras);

}

export async function getCarreraById(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getById(+req.params.id);
    sendGetJson(req, res, carreras);
}

export async function getByCategoria(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getByCategoria(req.params.categoria);
    sendGetJson(req,res,carreras);
}

export async function getByMinParticipantes(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getByMinParticipantes(+req.params.numParticipantes);
    sendGetJson(req, res, carreras);

}

export async function getByParticipante(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getByParticipante(req.params.participante);
    sendGetJson(req, res, carreras);
}

export async function getByNombreCarrera(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getByNombreCarrera(req.params.carrera);
    sendGetJson(req, res, carreras);
}

export async function create(req: Request, res: Response) {

    const participantesStr = req.body.participantes.toString();

    let values = [[req.body.nombre, req.body.numParticipantes, participantesStr, req.body.categoria]];

    const carreras: any = await CarrerasService.create(values);
    if (!carreras.error) {
        res.status(200).json(carreras);
    } else {
        res.status(400).json(carreras);
    }
}

export async function update(req: Request, res: Response) {

    const participantesStr = req.body.participantes.toString();

    const categorias: any = await CarrerasService.update(+req.params.id, req.body.nombre, req.body.numParticipantes, participantesStr, req.body.categoria);
    res.status(200).json(categorias);
}

export async function del(req: Request, res: Response) {
    const carreras: any = await CarrerasService.del(+req.params.id);
    res.status(200).json(carreras);
}

function sendGetJson(req: Request, res: Response, data: any) {
    let result;
    if (data.length <= 0) {
        result = { error: true, msg: `No se encontraron carrera(s)` };
        res.status(404).json(result);
    } else {
        res.status(200).json(data);
    }
}