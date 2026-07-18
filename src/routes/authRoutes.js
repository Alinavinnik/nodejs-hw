import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserSchema } from '../validations/authValidation';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), authController);

export default router;
