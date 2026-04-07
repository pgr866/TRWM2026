import { type Request, type Response } from 'express';
import mongoose from 'mongoose';

const Loc = mongoose.model('Location');

export const reviewsReadOne = async (req: Request, res: Response): Promise<any> => {
    try {
        const location: any = await Loc.findById(req.params['locationId'])
            .select("name reviews")
            .exec();
        if (!location)
            return res.status(404).json({ message: "Location not found" });

        const review = await location.reviews.id(req.params['reviewId']);
        if (!review)
            return res.status(404).json({ message: "Review not found" });

        return res.status(200).json(review);
    } catch (err: any) {
        console.error(err.message);
        if (err.name === "CastError")
            return res.status(400).json({ message: "Bad Request" });
        res.status(500).json({ message: "Unknown Error" });
    }
};

export const reviewsCreate = async (req: Request, res: Response): Promise<any> => {
    try {
        const location: any = await Loc.findById(req.params['locationId'])
            .select("name reviews")
            .exec();
        if (!location)
            return res.status(404).json({ message: "Location not found" });

        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });

        const savedLocation = await location.save();
        const review = savedLocation.reviews[savedLocation.reviews.length - 1];

        return res.status(200).json(review);
    } catch (err: any) {
        console.error(err.message);
        if (err.name === "CastError")
            return res.status(400).json({ message: "Bad Request" });
        res.status(500).json({ message: "Unknown Error" });
    }
};
