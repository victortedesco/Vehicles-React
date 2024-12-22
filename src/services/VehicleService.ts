import { Vehicle } from "../models/Vehicle";

const getAllVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await fetch("vehicles.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      imageUrl: item.imageUrl,
      name: item.name,
      price: item.price,
      brand: item.brand,
      year: item.year,
    })) as Vehicle[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getVehicleById = async (id: number): Promise<Vehicle | undefined> => {
  try {
    const data = await getAllVehicles();
    return data.filter((x) => x.id == id)[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};

export { getAllVehicles, getVehicleById };
