import { Router } from 'express';

import OrdinaryRouter from './ordinary';
import DispatchersRouter from './dispatchers';
import AdminsRouter from './admins';

const router = Router();

router.use('/ordinary', OrdinaryRouter);
router.use('/dispatchers', DispatchersRouter);
router.use('/admins', AdminsRouter);

export default router;
