export interface Vehicle {
  id: number;
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  mileage: number;
  fuel: Fuel;
  year: string;
}

export enum Fuel {
  Flex = "Flex",
  Diesel = "Diesel",
  Alcohol = "Alcohol",
  Gasoline = "Gasoline",
  Hybrid = "Hybrid",
  Electric = "Electric",
}

export const formatPrice = (value: number): string => {
  if (value == 0) return "CONTACT US!";
  return "$" + value.toFixed(2);
};
