import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';

const router = Router();
router.patch('/users/me/avatar', authenticate);
