import { useEffect, useState } from "react";
import { Vehicle } from "../../models/Vehicle";
import { Header } from "../Header";
import { getFavoriteVehicles } from "../../services/VehicleService";
import { Footer } from "../Footer";
import { VehicleCarousel } from "../VehicleCarousel";
import { VehicleCard } from "../VehicleCard";

export const FavoritesPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await getFavoriteVehicles();
        setVehicles(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadVehicles();
  }, []);

  return (
    <div id="container">
      <Header></Header>
      <main className="flex flex-col gap-y-2 grow items-center">
        <p className="text-3xl font-bold">Favorites</p>
        <div className="grid gap-4 
                      grid-cols-1 
                      md:grid-cols-2 md:grid-rows-auto 
                      lg:grid-cols-3 lg:grid-rows-auto 
                      xl:grid-cols-4 xl:grid-rows-auto">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v}></VehicleCard>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
