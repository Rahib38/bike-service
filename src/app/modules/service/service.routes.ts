import express from 'express'
import { ServiceController } from './service.controller'
const serviceRouter = express.Router()

serviceRouter.post('/services', ServiceController.createService)

serviceRouter.get('/services', ServiceController.getAllServiceFromDB)

serviceRouter.get('/services/:id', ServiceController.SingleGetServiceFromDB)

serviceRouter.put('/services/:id', ServiceController.updateServiceFromDB)

export default serviceRouter
