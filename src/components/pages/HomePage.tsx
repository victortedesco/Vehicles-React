import { useEffect, useState } from "react";
import { Vehicle } from "../../models/Vehicle";
import { Header } from "../Header";
import { getAllVehicles } from "../../services/VehicleService";
import { Footer } from "../Footer";
import { VehicleCarousel } from "../VehicleCarousel";

export const HomePage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await getAllVehicles();
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
      <main className="flex flex-col grow items-center">
        <VehicleCarousel
          title="Highlights"
          vehicles={vehicles}
        ></VehicleCarousel>
      </main>
      <Footer></Footer>
    </div>
  );
};
