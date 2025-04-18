import express from 'express'
import { bikeController } from './bike.controller'
const bikeRouter = express.Router()

bikeRouter.post('/bikes', bikeController.createBike)

export default bikeRouter