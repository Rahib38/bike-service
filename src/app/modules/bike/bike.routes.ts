import express from 'express'
import { bikeController } from './bike.controller'
const bikeRouter = express.Router()

bikeRouter.post('/bikes', bikeController.createBike)

bikeRouter.get('/bikes', bikeController.getAllBikeFromDB)

bikeRouter.get('/bikes/:id', bikeController.SingleGetAllBikeFromDB)

export default bikeRouter