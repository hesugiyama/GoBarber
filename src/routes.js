import { Router } from "express";

import User from './app/models/User';

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: 'henrique',
    email: 'h.sugiyama@a.com',
    password_hash: '123456',
  })
  return res.json({ message: "Hi henry" });
});

export default routes;
