import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../../controllers/admin';

import isAdmin from '../../../../middlewares/isAdmin';

const router = Router();
const controller = new AdminController();

router.get('/', async (req, res) => {
  const data = await controller.all();

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.get('/:id', async (req, res) => {
  const data = await controller.find(req.params.id);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

// router.post('/', isAdmin, async (req, res) => {
router.post('/', async (req, res) => {
  const data = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
