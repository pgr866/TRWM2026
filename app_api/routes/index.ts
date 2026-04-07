import express from 'express';
const router = express.Router();
import * as ctrlLocations from '../controllers/locations.js';
import * as ctrlReviews from '../controllers/reviews.js';

router.get('/locations', ctrlLocations.locationsReadAll);
router.get('/locations/:locationId', ctrlLocations.locationsReadOne);
router.post('/locations', ctrlLocations.locationsCreate);

router.get('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne);
router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreate);

export default router;
