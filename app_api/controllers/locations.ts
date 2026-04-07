import { type Request, type Response } from 'express';
import mongoose from 'mongoose';

const Loc = mongoose.model('Location');

export const locationsReadAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const locations = await Loc.find().exec();
        res
            .status(200)
            .json(locations);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export const locationsReadOne = async (req: Request, res: Response): Promise<any> => {
    try {
        const location = await Loc.findById(req.params['locationId']).exec();
        if (!location)
            return res.status(404).json({ message: "not found" });
        return res.status(200).json(location);
    } catch (err: any) {
        console.error(err.message);
        if (err.name === "CastError")
            return res.status(400).json({ message: "Bad Request" });
        res.status(500).json({ message: "Unknown Error" });
    }
}

export const locationsCreate = async (req: Request, res: Response): Promise<void> => {
    try {
        const location = await Loc.create(
            req.body
        );
        res.status(201).json(location);
    } catch (err: any) {
        res.status(400).json(err);
    }
}
