import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from '../../../middlewares/jwt';
import isPrivileged from '../../../utils/isPrivileged';

const router = Router();

router.get('/', jwt, async (req, res) => {
  const user = req.user as { _id: string };

  const privileged = await isPrivileged(user._id);

  return privileged
    ? res.status(StatusCodes.OK).send({
        data: 'Success',
        error: null,
      })
    : res.status(StatusCodes.FORBIDDEN).send({
        data: null,
        error: 'Forbidden',
      });
});

export default router;
