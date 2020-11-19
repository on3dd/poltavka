import { Router } from 'express';
import { verify } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import jwt from '../../../middlewares/jwt';
import { SECRET } from '../../../utils/constants';
import isPrivileged from '../../../utils/isPrivileged';

const router = Router();

router.get('/', jwt, async (req, res) => {
  const decoded = verify(req.cookies.token, SECRET) as {
    _id: string;
    phone: string;
    expires: string;
  };

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
