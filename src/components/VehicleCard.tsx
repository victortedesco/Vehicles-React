import { formatPrice, Vehicle } from "@/models/Vehicle";
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

export const VehicleCard = ({ className, ...props }: VehicleCardProps) => {
  const navigate = useNavigate();

  const viewVehicle = () => {
    navigate(`/vehicle?id=${props.vehicle.id}`);
  };

  return (
    <>
      <Card
        className={cn("w-[190px] h-[420px]", "flex flex-col cursor-pointer", className)} {...props}
        onClick={viewVehicle}
      >
        <CardHeader className="min-h-32">
          <CardTitle>{props.vehicle.name}</CardTitle>
          <CardDescription>
            {props.vehicle.brand} | {props.vehicle.year}
          </CardDescription>
        </CardHeader>
        <CardContent className="grow">
          <img
            className="size-32"
            src={props.vehicle.imageUrl}
            alt={props.vehicle.name + " Image"}
          ></img>
        </CardContent>
        <CardFooter className="mt-auto">
          <p className="text-xl font-bold">{formatPrice(props.vehicle.price)}</p>
        </CardFooter>
      </Card>
    </>
  );
};
