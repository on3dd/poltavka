import wrapper from '../store';
import axiosService from './axiosService';
import { API_ENDPOINTS } from './constants';

const security = wrapper.getServerSideProps(
  async ({ req, res }) => {
    try {
      await axiosService.get(API_ENDPOINTS.admin.security, {
        headers: { cookie: req.headers.cookie },
      });
    } catch (err) {
      console.error('error while checking access: ', err);
      console.info('redirecting to the login page...');

      res.writeHead(302, { Location: '/login' }).end();
    }
  },
);

export default security;
