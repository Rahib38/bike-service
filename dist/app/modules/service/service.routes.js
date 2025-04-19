"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const serviceRouter = express_1.default.Router();
serviceRouter.post('/services', service_controller_1.ServiceController.createService);
serviceRouter.get('/services', service_controller_1.ServiceController.getAllServiceFromDB);
serviceRouter.get('/services/status', service_controller_1.ServiceController.getpendingOrOverdueServices);
serviceRouter.get('/services/:id', service_controller_1.ServiceController.SingleGetServiceFromDB);
serviceRouter.put('/services/:id', service_controller_1.ServiceController.updateServiceFromDB);
exports.default = serviceRouter;
