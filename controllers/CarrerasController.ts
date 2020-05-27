import { Request, Response } from "express";
import CarrerasService from "../services/CarrerasService";


export async function carreras(req: Request, res: Response) {
    const carreras: any = await CarrerasService.getAll();
    res.status(200).json(carreras);
}