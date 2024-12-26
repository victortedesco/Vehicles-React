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
      mileage: item.mileage,
      fuel: item.fuel,
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

const getVehiclesByIds = async (ids: number[]): Promise<Vehicle[]> => {
  try {
    const data = await getAllVehicles();
    return data.filter((x) => x.id in ids);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getFavoriteVehicles = async (): Promise<Vehicle[]> => {
  let favoriteVehicles: number[] = getFavoriteVehiclesIds();
  try {
    const data = await getAllVehicles();
    return data.filter((x) => favoriteVehicles.includes(x.id));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const isVehicleInFavorites = (id: number): boolean => {
  let favoriteVehicles: number[] = getFavoriteVehiclesIds();
  return favoriteVehicles.includes(id)
}

const getFavoriteVehiclesIds = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

const addVehicleToFavorites = (id: number): void => {
  let favoriteVehicles: number[] = getFavoriteVehiclesIds();
  favoriteVehicles.push(id);
  favoriteVehicles = favoriteVehicles.filter(
    (item, index) => favoriteVehicles.indexOf(item) === index
  );
  localStorage.setItem("favorites", JSON.stringify(favoriteVehicles));
};

const removeVehicleFromFavorites = (id: number): void => {
  let favoriteVehicles: number[] = getFavoriteVehiclesIds();
  favoriteVehicles = favoriteVehicles.filter((x) => x != id);
  localStorage.setItem("favorites", JSON.stringify(favoriteVehicles));
};

export {
  getAllVehicles,
  getVehicleById,
  getVehiclesByIds,
  getFavoriteVehicles,
  isVehicleInFavorites,
  addVehicleToFavorites,
  removeVehicleFromFavorites,
};
