import { Router } from 'express';

import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'allan',
    email: 'allan@test.com',
    password_hash: '1232432434',
  });

  return res.json(user);
});

export default routes;
