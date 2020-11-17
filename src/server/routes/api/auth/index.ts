import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../controllers/auth';

import isUserExist from '../../../middlewares/isUserExist';

const router = Router();
const controller = new AdminController();

// router.get('/', async (req, res) => {
//   const admins = await controller.all();

//   res //
//     .status(StatusCodes.OK)
//     .send({
//       data: admins,
//       error: null,
//     });
// });

router.post('/', isUserExist, async (req, res) => {
  const auth = await controller.authenticate(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data: auth,
      error: null,
    });
});

export default router;
