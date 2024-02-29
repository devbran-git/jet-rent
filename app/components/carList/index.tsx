import Image, { StaticImageData } from "next/image";

import { Car } from "../Car";
import Rating from "../Rating";
import ShortDateFormat from "../ShortDateFormat";
import AvailabilityTag from "../AvailabilityTag";
import MediumDateFormat from "../MediumDateFormat";

import kebab from "@/public/assets/img/kebab-menu.svg";

interface CarListProps {
  cars: {
    id: number;
    name: string;
    photo: StaticImageData;
    next_reservation: Date;
    available: boolean;
    rating: number;
  }[];
}

export default function CarList({ cars }: CarListProps) {
  return (
    <table className="w-full max-w-[1376px] mx-auto table-fixed lg:divide-y lg:divide-gray-200 lg:rounded-lg lg:shadow-[0_2px_5px_rgba(0,0,0,0.1)] lg:overflow-hidden">
      <thead className="hidden h-[50px] bg-gray-50 font-semibold text-xs text-gray-500 lg:table-header-group">
        <tr className="w-full">
          <th className="text-start max-w-[287px] pl-4">CAR</th>
          <th className="text-start max-w-[332px]">NEXT RESERVATION</th>
          <th className="text-start max-w-[332px]">STATUS</th>
          <th className="text-start max-w-[332px]">RATING</th>
          <th className="max-w-[91px] text-end pr-4">ACTIONS</th>
        </tr>
      </thead>

      <tbody>
        {cars.map((car) => (
          <tr className="w-full border-b last:border-b-0" key={car.id}>
            <td className="max-w-[287px] pl-4 py-2">
              <Car.Root>
                <Car.Image photo={car.photo} name={car.name} />

                <div>
                  <span className="font-semibold text-gray-900 lg:text-sm">{car.name}</span>

                  <p className="text-xs text-gray-500 mt-2 lg:hidden">
                    Next reservation: <ShortDateFormat nextReservation={car.next_reservation} />
                  </p>

                  <div className="mt-3 lg:hidden">
                    <Rating rating={car.rating} />
                  </div>
                </div>

                <Car.AvailabilityIcon available={car.available} />
              </Car.Root>
            </td>

            <td className="hidden max-w-[332px] lg:table-cell">
              <MediumDateFormat nextReservation={car.next_reservation} />
            </td>

            <td className="hidden max-w-[332px] lg:table-cell">
              <AvailabilityTag available={car.available} />
            </td>

            <td className="hidden max-w-[332px] lg:table-cell">
              <Rating rating={car.rating} />
            </td>

            <td className="align-top w-6 pt-3 lg:align-middle lg:max-w-[91px] lg:pt-0">
              <Image className="ml-auto mr-7" src={kebab} alt="Ver opções" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
