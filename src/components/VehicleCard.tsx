import { Vehicle } from "@/models/Vehicle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface VehicleCardProps extends React.ComponentProps<typeof Card> {
  vehicle: Vehicle;
}

const formatPrice = (value: number): string => {
  if (value == 0) return "CONTACT US!";
  return "$" + value.toFixed(2);
};

export const VehicleCard = ({ className, ...props }: VehicleCardProps) => {
  const navigate = useNavigate();

  const viewVehicle = () => {
    navigate(`/vehicle?id=${props.vehicle.id}`);
  };

  return (
    <>
      <Card
        className={cn("w-[190px]", className)} {...props}
        onClick={viewVehicle}
      >
        <CardHeader>
          <CardTitle>{props.vehicle.name}</CardTitle>
          <CardDescription>
            {props.vehicle.brand} | {props.vehicle.year}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            className="size-32"
            src={props.vehicle.imageUrl}
            alt={props.vehicle.name + " Image"}
          ></img>
        </CardContent>
        <CardFooter>
          <p>{formatPrice(props.vehicle.price)}</p>
        </CardFooter>
      </Card>
    </>
  );
};
