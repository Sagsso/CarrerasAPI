import { Request, Response } from "express";
import CategoriasService from "../services/CategoriasService";


export async function categorias(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getAll();
    sendGetJson(req, res, categorias);

}

export async function getCategoriaById(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getById(+req.params.id);
        sendGetJson(req, res, categorias);
}

export async function getCategoriaByNombre(req: Request, res: Response) {
    const categorias: any = await CategoriasService.getByNombre(req.params.nombre);
        sendGetJson(req, res, categorias);
}

export async function create(req: Request, res: Response) {
    const marcasAdmitidasStr = req.body.marcasAdmitidas.toString();

    let values = [[req.body.nombre, req.body.descripcion, req.body.capacidad, marcasAdmitidasStr]];
    
    const categorias: any = await CategoriasService.create(values);
    console.log(categorias);
    if(!categorias.error) {
        res.status(200).json(categorias);
    } else {
        res.status(400).json(categorias);
    }
}

export async function update(req: Request, res: Response) {
    const marcasAdmitidasStr = req.body.marcasAdmitidas.toString();

    const categorias: any = await CategoriasService.update(+req.params.id, req.body.nombre, req.body.descripcion, req.body.capacidad, marcasAdmitidasStr);
    res.status(200).json(categorias);
}

export async function updateCapacidad(req: Request, res: Response) {
    const categorias: any = await CategoriasService.updateCapacidad(+req.params.id, req.body.capacidad);
    res.status(200).json(categorias);
}

export async function updateMarcasAdmitidas(req: Request, res: Response) {
    const categorias: any = await CategoriasService.updateMarcasAdmitidas(+req.params.id, req.body.marcasAdmitidas);
    res.status(200).json(categorias);
}

export async function del(req: Request, res: Response) {
    const categorias: any = await CategoriasService.del(+req.params.id);
    res.status(200).json(categorias);
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