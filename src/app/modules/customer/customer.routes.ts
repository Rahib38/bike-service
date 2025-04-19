import express from 'express'
import { customerController } from './customer.controller'
const router = express.Router()

router.post('/customers', customerController.createController)

router.get('/customers', customerController.getAllCustomerFromDB)

router.get('/customers/:id', customerController.SingleGetAllCustomerFromDB)

router.put('/customers/:id', customerController.updateCustomerFromDB)

router.delete('/customers/:id', customerController.deleteCustomerFromDB)

export const customerRouter= router