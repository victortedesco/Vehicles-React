import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { VehicleCard } from "./VehicleCard";
import { Vehicle } from "@/models/Vehicle";

interface VehicleCarouselProps {
  title: string;
  vehicles: Vehicle[];
}

export const VehicleCarousel: FC<VehicleCarouselProps> = ({
  title,
  vehicles,
}) => {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <p className="font-bold text-xl">{title}</p>
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {vehicles.map((v) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={v.id}>
              <VehicleCard vehicle={v}></VehicleCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
