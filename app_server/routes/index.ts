import express from 'express';
const router = express.Router();
import * as ctrlMain from '../controllers/main.js';

/* GET home page. */
router.get('/', ctrlMain.index);

export default router;
