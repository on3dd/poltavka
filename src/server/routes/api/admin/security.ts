import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from '../../../middlewares/jwt';
import decode from '../../../utils/decode';
import isPrivileged from '../../../utils/isPrivileged';

const router = Router();

router.get('/', jwt, async (req, res) => {
  const decoded = decode(req.cookies.token);

  const privileged = await isPrivileged(decoded._id);

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
