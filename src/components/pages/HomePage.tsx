import { useEffect, useState } from "react";
import { Vehicle } from "../../models/Vehicle";
import { Header } from "../Header";
import { getAllVehicles } from "../../services/VehicleService";
import { VehicleCardList } from "../VehicleCard";
import { Footer } from "../Footer";

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
    <>
      <Header></Header>
      <main>
        <VehicleCardList vehicles={vehicles}></VehicleCardList>
      </main>
      <Footer></Footer>
    </>
  );
};
