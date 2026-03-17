import express from 'express';
const router = express.Router();
import * as ctrlLocations from '../controllers/locations.js';
import * as ctrlOthers from '../controllers/others.js';

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get("/about", ctrlOthers.about);

export default router;
