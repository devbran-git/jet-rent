import Image from "next/image";
import { cars } from "./mocks/cars";

import star from "@/public/assets/img/star.svg";
import kebab from "@/public/assets/img/kebab-menu.svg";
import checked from "@/public/assets/img/checked-circle.svg";

export default function Home() {
  return (
    <main className="pt-6 px-4 pb-4">
      <div className="flex flex-col h-full divide-y divide-gray-200">
        {cars.map((car, index) => (
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
