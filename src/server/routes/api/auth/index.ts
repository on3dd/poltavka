import { Router } from 'express';
import passport from 'passport';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../controllers/auth';

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

router.post(
  '/',
  passport.authenticate('local', {
    failWithError: true,
    failureMessage: true,
  }),
  async (req, res) => {
    const auth = await controller.authenticate(req.body);
    console.log('req.body', req.body);

    res //
      .status(StatusCodes.OK)
      .send({
        data: auth,
        error: null,
      });
  },
);

export default router;
