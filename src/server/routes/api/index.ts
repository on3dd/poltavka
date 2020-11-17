import { Router } from 'express';

import AuthRouter from './auth';
import AdminRouter from './admin';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/admin', AdminRouter);

export default router;
