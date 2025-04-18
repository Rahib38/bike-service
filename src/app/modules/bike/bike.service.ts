import { Bike } from "../../../generated/prisma";
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
  
    const result = await prisma.$transaction(async (transactionClient) => {
      const createBikeData = await transactionClient.bike.create({
        data: userData,
      });
      return createBikeData;
    });
    return result;
  };

  const getAllBikeFromDB = async () => {
    const result = await prisma.bike.findMany();
    return result;
  };
  
  const SingleGetBikeFromDB = async (
    bikeId: string
  ): Promise<Bike | null> => {
    console.log(bikeId);
    const result = await prisma.bike.findUnique({
      where: {
        bikeId,
      },
    });
    return result;
  };

export const bikeService={
    createBike,getAllBikeFromDB,SingleGetBikeFromDB
}