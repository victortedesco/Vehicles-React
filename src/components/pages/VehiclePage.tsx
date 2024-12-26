import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice, Vehicle } from "../../models/Vehicle";
import {
  addVehicleToFavorites,
  getVehicleById,
  isVehicleInFavorites,
  removeVehicleFromFavorites,
} from "../../services/VehicleService";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { toast } from "react-toastify";

export const VehiclePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const vehicleId = parseInt(queryParams.get("id") ?? "0");

  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addToFavorites = () => {
    if (!vehicle) return;
    addVehicleToFavorites(vehicle.id);
    toast.success("Vehicle added to favorites!");
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    if (!vehicle) return;
    removeVehicleFromFavorites(vehicle.id);
    toast.warn("Vehicle removed from favorites!");
    setIsFavorite(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const data = await getVehicleById(vehicleId);
        setVehicle(data);
        if (!data) {
          console.log("The requested vehicle was not found!");
          navigate("/");
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };
    loadVehicle();
  }, []);

  return (
    <div id="container">
      <Header></Header>
      <main className="flex flex-col grow items-center">
        {isLoading || !vehicle ? (
          <p className="text-center text-2xl">Loading...</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-y-4 lg:w-1/2 xl:w-2/5 lg:justify-between gap-x-4 grow lg:grow-0 p-4 bg-white border rounded-lg ">
            <img
              className="size-64 lg:size-80"
              src={vehicle.imageUrl}
              alt={vehicle.name + " Image"}
            ></img>
            <section className="flex flex-col justify-between grow lg:grow-0 text-lg lg:items-center w-full">
              <p className="text-3xl font-bold">{vehicle.name}</p>
              <h1>
                {vehicle.brand} | {vehicle.year}
              </h1>
              <h2>{vehicle.mileage} KM</h2>
              <h3>{vehicle.fuel}</h3>
              <div className="flex flex-col mt-auto items-center">
                <h3 className="text-xl text-center font-bold">
                  {formatPrice(vehicle.price)}
                </h3>
                {!isFavorite ? (
                  <button
                    className="flex p-2 text-white border rounded-lg bg-gray-600 items-center gap-x-2"
                    onClick={addToFavorites}
                  >
                    <img className="size-8" src="heart.svg"></img>
                    Add to Favorites
                  </button>
                ) : (
                  <button
                    className="flex p-2 lg:text-base text-white border rounded-lg bg-gray-600 items-center gap-x-2"
                    onClick={removeFromFavorites}
                  >
                    <img className="size-8" src="heart.svg"></img>
                    Remove from Favorites
                  </button>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};
