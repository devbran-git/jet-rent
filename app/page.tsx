import Image from "next/image";

import star from "@/public/assets/img/star.svg";
import kebab from "@/public/assets/img/kebab-menu.svg";
import checked from "@/public/assets/img/checked-circle.svg";
import { cars } from "./mocks/cars";

export default function Home() {
  return (
    <main className="pt-6 px-4 pb-4 lg:p-8">
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

        {cars.map((car, index) => (
          <tbody key={car.id}>
            <tr>
              <td className="flex items-center gap-2 max-w-[287px] pl-4 py-2">
                <Image className="min-w-[49px] object-cover" src={car.photo} alt={car.name} width={49} height={46} />
                <span className="font-semibold text-sm text-gray-900">{car.name}</span>
              </td>

              <td className="max-w-[332px]">
                <p className="text-sm text-gray-500">Jul 6 - Jul 12</p>
              </td>

              <td className="max-w-[332px]">
                <div className="w-max py-1 px-[10px] rounded-md bg-green-100">
                  <span className="text-sm text-green-800">Available</span>
                </div>
              </td>

              <td className="max-w-[332px]">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image key={index} src={star} alt="" />
                  ))}
                </div>
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
              <Image className="min-w-[85px] object-cover" src={car.photo} alt={car.name} width={85} height={85} />
              <Image className="absolute top-[.5px] left-[.5px]" src={checked} alt="" width={24} height={24} />
            </div>

            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-gray-900">{car.name}</p>
                  <p className="text-xs text-gray-500">
                    Next reservation:{" "}
                    {car.next_reservation.toLocaleDateString("pt-BR", {
                      month: "numeric",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image key={index} src={star} alt="" />
                  ))}
                </div>
              </div>

              <Image src={kebab} alt="Ver opções" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
