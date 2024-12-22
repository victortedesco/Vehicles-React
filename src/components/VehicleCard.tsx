import { FC } from "react";
import { Vehicle } from "../models/Vehicle";
import { useNavigate } from "react-router-dom";

interface VehicleCardProps {
  vehicle: Vehicle;
}

interface VehicleCardListProps {
  vehicles: Vehicle[];
}

export const VehicleCardList: FC<VehicleCardListProps> = ({ vehicles }) => {
  return (
    <>
      <ol className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4">
        {vehicles.map((x) => (
          <li key={x.id}>
            <VehicleCard vehicle={x}></VehicleCard>
          </li>
        ))}
      </ol>
    </>
  );
};

export const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/vehicle?id=${vehicle.id}`);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleClick}>
      <img src={vehicle.imageUrl} alt={vehicle.name + " Image"}></img>
      <div>
        <p>
          {vehicle.name} | {vehicle.brand}
        </p>
        <h1>
          {vehicle.price != 0 ? (
            `$ ${vehicle.price.toFixed(2)}`
          ) : (
            <b>CONTACT US!</b>
          )}
        </h1>
      </div>
    </div>
  );
};
