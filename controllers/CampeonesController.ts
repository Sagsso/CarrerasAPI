import { Request, Response } from "express";
import CampeonesService from "../services/CampeonesService";
const fetch = require('node-fetch');


export async function campeones(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getAll();
        sendGetJson(req,res,campeones);
}

export async function getCampeonById(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getById(+req.params.id);
        sendGetJson(req,res,campeones);
}

export async function getCampeonByNombre(req: Request, res: Response) {
    const campeones: any = await CampeonesService.getByNombre(req.params.piloto);
        sendGetJson(req,res,campeones);
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

export async function consumirPilotos(req: Request, res: Response) {
    let pilotos = await fetch('http://api.finalpilotos.com/pilots').then((res:any) => res.json());

    let arrayNames: Array<string> = [];
    // console.log(pilotos[0].Nombre);
    pilotos.forEach((element: any )=> {
        arrayNames.push(element.Nombre);
    });

    console.log(arrayNames);
    res.status(200).json(arrayNames);
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