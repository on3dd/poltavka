import { authenticate } from 'passport';

export default authenticate('privileged', {
  session: true,
});
