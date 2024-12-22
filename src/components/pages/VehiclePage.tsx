import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Vehicle } from "../../models/Vehicle";
import { getVehicleById } from "../../services/VehicleService";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const VehiclePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const vehicleId = parseInt(queryParams.get("id") ?? "0");

  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const data = await getVehicleById(vehicleId);
        setVehicle(data);
        if (!data) {
          console.log("The request vehicle was not found!");
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
    <>
      <Header></Header>
      <main>
        {isLoading ? (
          <p className="text-center text-2xl">Loading...</p>
        ) : (
          <div></div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};
