import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import OrdinaryController from '../../../../controllers/ordinary';

import jwt from '../../../../middlewares/jwt';
import isPrivileged from '../../../../utils/isPrivileged';

const router = Router();
const controller = new OrdinaryController();

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
  const user = req.user as { _id: string };

  if ((await isPrivileged(user._id)) === false) {
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
