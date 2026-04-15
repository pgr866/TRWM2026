import { type Request, type Response } from 'express';
import axios from 'axios';

const apiOptions = {
    server: 'http://localhost:3000'
};

// Función auxiliar para renderizar la home
const renderHomePage = (req: Request, res: Response, locations: any[]): void => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations
    });
};

/* GET 'home' page */
export const homelist = async (req: Request, res: Response): Promise<void> => {
    const path = '/api/locations';
    try {
        const response = await axios.get(`${apiOptions.server}${path}`);
        renderHomePage(req, res, response.data);
    } catch (err: any) {
        console.error(err);
        res.render('error', { 
            error: err, 
            message: "API lookup error" 
        });
    }
};

/* GET 'Location info' page */
export const locationInfo = async (req: Request, res: Response): Promise<void> => {
    const path = `/api/locations/${req.params['locationId']}`;
    try {
        const response = await axios.get(`${apiOptions.server}${path}`);
        res.render('location-info', { 
            title: 'Location Info', 
            location: response.data 
        });
    } catch (err: any) {
        console.error(err);
        res.render('error', { 
            error: err, 
            message: "API lookup error" 
        });
    }
};

/* GET 'Add review' page */
export const addReview = async (req: Request, res: Response): Promise<void> => {
    const path = `/api/locations/${req.params['locationId']}`;
    try {
        const response = await axios.get(`${apiOptions.server}${path}`);
        res.render('location-review-form', { 
            title: 'Add Review', 
            location: response.data 
        });
    } catch (err: any) {
        console.error(err);
        res.render('error', { 
            error: err, 
            message: "API lookup error" 
        });
    }
};

/* POST 'Add review' */
export const doAddReview = async (req: Request, res: Response): Promise<void> => {
    const locationId = req.params['locationId'];
    const path = `/api/locations/${locationId}/reviews`;
    
    const postData = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10), // Aseguramos que sea número
        reviewText: req.body.review
    };

    try {
        await axios.post(`${apiOptions.server}${path}`, postData);
        res.redirect(`/location/${locationId}`);
    } catch (err: any) {
        console.error(err);
        res.render('error', { 
            error: err, 
            message: "API lookup error" 
        });
    }
};
