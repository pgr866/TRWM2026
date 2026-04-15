import express from 'express';
import * as ctrlUsers from '../controllers/users.js';

const router = express.Router();

/* GET users listing. */
router.get('/', ctrlUsers.index);

export default router;
