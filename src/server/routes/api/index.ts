import { Router } from 'express';

import PostsRouter from './posts';
import CategoriesRouter from './categories';

const router = Router();

router.use('/posts', PostsRouter);
router.use('/categories', CategoriesRouter);

export default router;
