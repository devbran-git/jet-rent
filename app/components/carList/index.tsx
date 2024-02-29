import Image, { StaticImageData } from "next/image";

import Rating from "../rating";
import CarPhoto from "../carPhoto";
import Reservation from "../reservation";
import Availability from "../availability";

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
    <>
      <table className="max-lg:hidden w-full max-w-[1376px] mx-auto divide-y divide-gray-200 rounded-lg overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] table-fixed">
        <thead className="h-[50px] bg-gray-50 font-semibold text-xs text-gray-500">
          <tr className="w-full">
            <th className="text-start max-w-[287px] pl-4">CAR</th>
            <th className="text-start max-w-[332px]">NEXT RESERVATION</th>
            <th className="text-start max-w-[332px]">STATUS</th>
            <th className="text-start max-w-[332px]">RATING</th>
            <th className="max-w-[91px] text-end pr-4">ACTIONS</th>
          </tr>
        </thead>

        {cars.map((car) => (
          <tbody key={car.id}>
            <tr>
              <td className="max-w-[287px] pl-4 py-2">
                <CarPhoto {...car} />
              </td>

              <td className="max-w-[332px]">
                <Reservation nextReservation={car.next_reservation} />
              </td>

              <td className="max-w-[332px]">
                <Availability isAvailable={car.available} />
              </td>

              <td className="max-w-[332px]">
                <Rating rating={car.rating} />
              </td>

              <td className="max-w-[91px]">
                <Image className="ml-auto mr-7" src={kebab} alt="Ver opções" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="flex flex-col h-full divide-y divide-gray-200 lg:hidden">
        {cars.map((car) => (
          <div className="flex gap-5 py-2" key={car.id}>
            <div className="relative">
              <CarPhoto {...car} />
              <Availability isAvailable={car.available} />
            </div>

            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-gray-900">{car.name}</p>
                  <Reservation nextReservation={car.next_reservation} />
                </div>

                <Rating rating={car.rating} />
              </div>

              <Image src={kebab} alt="Ver opções" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
