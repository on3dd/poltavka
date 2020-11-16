import { Router } from 'express';

import ApiRouter from '../routes/api';

const router = Router();

router.use('/api', ApiRouter);

export default router;
