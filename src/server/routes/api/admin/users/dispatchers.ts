import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import DispatcherController from '../../../../controllers/dispatcher';

import jwt from '../../../../middlewares/jwt';
import decode from '../../../../utils/decode';
import isAdmin from '../../../../utils/isAdmin';

const router = Router();
const controller = new DispatcherController();

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
  const decoded = decode(req.cookies.token);

  if ((await isAdmin(decoded._id)) === false) {
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

router.patch('/:id', jwt, async (req, res) => {
  const decoded = decode(req.cookies.token);

  if ((await isAdmin(decoded._id)) === false) {
    return res.status(StatusCodes.FORBIDDEN).send({
      data: null,
      error: 'Forbidden',
    });
  }

  const data = await controller.update(
    req.params.id,
    req.body,
  );

  return res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.delete('/:id', jwt, async (req, res) => {
  const decoded = decode(req.cookies.token);

  if ((await isAdmin(decoded._id)) === false) {
    return res.status(StatusCodes.FORBIDDEN).send({
      data: null,
      error: 'Forbidden',
    });
  }

  const data = await controller.delete(req.params.id);

  return res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
