import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../../controllers/admin';

import jwt from '../../../../middlewares/jwt';
import isAdmin from '../../../../utils/isAdmin';

const router = Router();
const controller = new AdminController();

router.get('/', async (req, res) => {
  const data = await controller.all();

  return res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.get('/:id', async (req, res) => {
  const data = await controller.find(req.params.id);

  return res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.post('/', jwt, async (req, res) => {
  console.log('req.user', req.user);

  const user = req.user as { _id: string };

  if ((await isAdmin(user._id)) === false) {
    return res.status(StatusCodes.FORBIDDEN).send({
      data: null,
      error: 'Forbidden',
    });
  }

  const data = await controller.create(req.body);

  return res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
