import { Router } from 'express';
import { authenticate } from 'passport';
import { sign } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import AdminController from '../../../controllers/auth';

import { SECRET } from '../../../utils/constants';

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

router.post('/', async (req, res, next) => {
  authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        console.log('err', err);
        console.log('user', user);
        console.log('info', info);

        const error = new Error('An error occurred.');

        return next(error);
      }

      return req.login(
        user,
        { session: false },
        async (err) => {
          if (err) return next(err);

          const body = {
            _id: user._id,
            email: user.email,
          };

          const token = sign({ user: body }, SECRET);

          return res.json({ token });
        },
      );
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
});

export default router;
