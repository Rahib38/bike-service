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
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
    };
    console.log(data);
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createCustomerData = yield transactionClient.customer.create({
            data: userData,
        });
        return createCustomerData;
    }));
    return result;
});
const getAllCustomerFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const SingleGetCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(customerId);
    const result = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const updateCustomerFromDB = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("data", customerId, data);
    const result = yield prisma_1.default.customer.update({
        where: { customerId },
        data,
    });
    return result;
});
const deleteCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const customerDeleteData = yield transactionClient.customer.delete({
            where: {
                customerId,
            },
        });
        return customerDeleteData;
    }));
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomerFromDB,
    SingleGetCustomerFromDB,
    updateCustomerFromDB,
    deleteCustomerFromDB,
};
