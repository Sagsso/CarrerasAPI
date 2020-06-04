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
    const pilotos = await fetch('http://api.finalpilotos.com/pilots').then((res:any) => res.json());
    const campeones: any = await CampeonesService.getAll();


    let nombresPilotos: Array<string> =[];
    let nuevosPilotos: string[][] = [];

    pilotos.forEach((pilotico: any) => {
        nombresPilotos.push(pilotico.Nombre)
    });

    // console.log(pilotos[0].Nombre);
    campeones.forEach((campeon: any )=> {
        // console.log(campeon.piloto)
        if (nombresPilotos.indexOf(campeon.piloto) >= 0 ) {
            // console.log(`Eliminando ${campeon.piloto}...`);
            nombresPilotos.splice(nombresPilotos.indexOf(campeon.piloto), 1);
        }
    });

    nombresPilotos.forEach(nombre => {
        let newArr = [nombre];
        nuevosPilotos.push(newArr);
    });

    console.log(nuevosPilotos);    
    if(nuevosPilotos.length>0) {
        let addedPilots = await CampeonesService.addPilotosToCampeones(nuevosPilotos);
        // console.log(addedPilots);
        res.status(200).json({msg: "Se han agregado los nuevos pilotos de la API Pilotos", data: addedPilots});
    } else {
        res.status(200).json({ msg: "No hay nuevos pilotos para sumarse a campeones."});

    }

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