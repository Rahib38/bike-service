import express from 'express'
import { ServiceController } from './service.controller'
const serviceRouter = express.Router()

serviceRouter.post('/services', ServiceController.createService)

export default serviceRouter
