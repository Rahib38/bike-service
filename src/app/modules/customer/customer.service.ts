import { Customer } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createCustomer = async (data: any) => {
  const userData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  console.log(data);
  const result = await prisma.$transaction(async (transactionClient) => {
    const createCustomerData = await transactionClient.customer.create({
      data: userData,
    });
    return createCustomerData;
  });
  return result;
};

const getAllCustomerFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const SingleGetCustomerFromDB = async (
  customerId: string
): Promise<Customer | null> => {
  console.log(customerId);
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};

const updateCustomerFromDB = async (
  customerId: string,
  data: Partial<Customer>
): Promise<Customer | null> => {
  console.log("data", customerId, data);

  const result = await prisma.customer.update({
    where: { customerId },
    data,
  });

  return result;
};

const deleteCustomerFromDB = async (customerId: string) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const customerDeleteData = await transactionClient.customer.delete({
      where: {
        customerId,
      },
    });
    return customerDeleteData
  });
  return result
};

export const customerService = {
  createCustomer,
  getAllCustomerFromDB,
  SingleGetCustomerFromDB,
  updateCustomerFromDB,
  deleteCustomerFromDB,
};
