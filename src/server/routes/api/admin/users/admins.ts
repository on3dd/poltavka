import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../../controllers/admin';

const router = Router();
const controller = new AdminController();

router.get('/', async (req, res) => {
  const admins = await controller.all();

  res //
    .status(StatusCodes.OK)
    .send({
      data: admins,
      error: null,
    });
});

router.post('/', async (req, res) => {
  const admin = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data: admin,
      error: null,
    });
});

export default router;
