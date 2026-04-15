import express from 'express';
import * as ctrlLocations from '../controllers/locations.js';
import * as ctrlOthers from '../controllers/others.js';

const router = express.Router();

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationId', ctrlLocations.locationInfo);
router.get('/location/:locationId/review/new', ctrlLocations.addReview);
router.post('/location/:locationId/review/new', ctrlLocations.doAddReview);

/* Other pages */
router.get("/about", ctrlOthers.about);

export default router;
