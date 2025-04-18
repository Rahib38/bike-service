import prisma from "../../../shared/prisma";

const createBike = async (data: any) => {
    const userData = {
      brand: data.brand,
      model: data.model,
      year: data.year,
      customer: {
        connect: {
          customerId: data.customerId,
        },
      },
    };
  
    console.log(data);
    const result = await prisma.$transaction(async (transactionClient) => {
      const createBikeData = await transactionClient.bike.create({
        data: userData,
      });
      return createBikeData;
    });
    return result;
  };

export const bikeService={
    createBike
}