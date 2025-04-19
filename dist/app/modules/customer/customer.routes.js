"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post('/customers', customer_controller_1.customerController.createController);
router.get('/customers', customer_controller_1.customerController.getAllCustomerFromDB);
router.get('/customers/:id', customer_controller_1.customerController.SingleGetAllCustomerFromDB);
router.put('/customers/:id', customer_controller_1.customerController.updateCustomerFromDB);
router.delete('/customers/:id', customer_controller_1.customerController.deleteCustomerFromDB);
exports.default = router;
