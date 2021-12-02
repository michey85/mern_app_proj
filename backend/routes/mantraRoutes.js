import express from 'express';
import { mantras } from '../data/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(mantras);
});

router.get('/:name', (req, res) => {
  const mantra = mantras.find(m => m.name.toLowerCase() === req.params.name.toLowerCase());

  if (mantra) {
    res.json(mantra);
  } else {
    res.status(404).json({
      error: 'There is no mantra with this name'
    });
  }
});

export default router;
