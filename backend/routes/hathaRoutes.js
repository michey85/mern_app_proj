import express from 'express';

import { hathaRoot, hathaByName, createAsana } from '../controllers/hathaController.js';

const router = express.Router();

router.route('/').get(hathaRoot).post(createAsana);
router.get('/:name', hathaByName);


export default router;
