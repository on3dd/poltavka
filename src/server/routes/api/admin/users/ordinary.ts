import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import OrdinaryController from '../../../../controllers/ordinary';

import isPrivileged from '../../../../middlewares/isPrivileged';

const router = Router();
const controller = new OrdinaryController();

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

router.post('/', isPrivileged, async (req, res) => {
  const data = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
