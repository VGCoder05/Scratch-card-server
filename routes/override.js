import express from 'express';
import { getOverride, setOverride } from '../controllers/overrideController.js';

const router = express.Router();

router.get('/', getOverride);
router.put('/', setOverride);

export default router;