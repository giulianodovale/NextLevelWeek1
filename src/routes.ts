import express from 'express'


import PointsController from './controllers/pointsControllers';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();
const pointsControllers =  new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsControllers.index);
routes.post('/points', pointsControllers.create);
routes.get('/points/:id', pointsControllers.show);

export default routes;