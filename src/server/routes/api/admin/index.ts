import { Router } from 'express';

import UsersRouter from './users';
import SecurityRouter from './security';

const router = Router();

router.use('/users', UsersRouter);
router.use('/security', SecurityRouter);

export default router;
