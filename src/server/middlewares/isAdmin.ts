import { authenticate } from 'passport';

export default authenticate('admin', {
  session: false,
  failWithError: true,
});
