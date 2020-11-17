import { Router } from 'express';

import AdminsRouter from './admins';

const router = Router();

router.use('/admins', AdminsRouter);

export default router;
