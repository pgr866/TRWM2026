import express from 'express';
const router = express.Router();
import * as ctrlUsers from '../controllers/users.js';

/* GET users listing. */
router.get('/', ctrlUsers.index);

export default router;
