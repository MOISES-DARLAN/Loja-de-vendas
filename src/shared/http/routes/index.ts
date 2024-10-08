import { Router } from 'express';

const routes = Router();

routes.get("/", (req, res)=>{
  res.json({mensage: 'feito com sucesso'})
})

export default routes
