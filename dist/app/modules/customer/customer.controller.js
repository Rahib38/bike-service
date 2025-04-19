"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const customer_service_1 = require("./customer.service");
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.createCustomer(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Create customer successfuly..!",
        data: result,
    });
});
const getAllCustomerFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.customerService.getAllCustomerFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully..!",
        data: result,
    });
});
const SingleGetAllCustomerFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.SingleGetCustomerFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer fetched successfully..!",
        data: result,
    });
});
const updateCustomerFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // const { data } = req.body;
    const result = yield customer_service_1.customerService.updateCustomerFromDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer updated successfully..!",
        data: result,
    });
});
const deleteCustomerFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // const { data } = req.body;
    yield customer_service_1.customerService.deleteCustomerFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer deleted successfully..!",
    });
});
exports.customerController = {
    createController,
    getAllCustomerFromDB,
    SingleGetAllCustomerFromDB,
    updateCustomerFromDB,
    deleteCustomerFromDB,
};
