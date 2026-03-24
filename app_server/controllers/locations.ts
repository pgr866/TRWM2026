import { type Request, type Response, type NextFunction } from 'express';

/* GET 'home' page */
export const homelist = (req: Request, res: Response, next: NextFunction): void => {
    res.render('locations-list',
        {
            title: 'Loc8r - find a place to work with wifi',
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi near you!'
            },
            locations:[ {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            } ]
        });
};

/* GET 'Location info' page */
export const locationInfo = (req: Request, res: Response, next: NextFunction): void => {
    res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
export const addReview = (req: Request, res: Response, next: NextFunction): void => {
    res.render('location-review-form', { title: 'Add review' });
};
