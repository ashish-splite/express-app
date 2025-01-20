import express from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { createData, getData, updateData, deleteData } from '../controllers/dataController.js';

const router = express.Router();

router.post('/', authenticate, createData);
router.get('/', authenticate, getData);
router.put('/:id', authenticate, updateData);
router.delete('/:id', authenticate, deleteData);

export default router;
