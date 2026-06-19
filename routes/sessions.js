import express from 'express';
import { logSession, getSessions } from '../controllers/sessionsController.js';

const router = express.Router();

router.get('/', getSessions);
router.post('/', logSession);

export default router;