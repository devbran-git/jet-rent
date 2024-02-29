import Image from "next/image";

import checked from "@/public/assets/img/checked-circle.svg";

interface AvailabilityProps {
  isAvailable: boolean;
}

export default function Availability({ isAvailable }: AvailabilityProps) {
  return (
    <>
      <Image className="absolute top-[.5px] left-[.5px] lg:hidden" src={checked} alt="" width={24} height={24} />

      <div className={`hidden w-max py-1 px-[10px] rounded-md  ${isAvailable ? "bg-green-100" : "bg-red-100"} lg:block`}>
        <span className="font-medium text-sm text-green-800">{isAvailable ? "Available" : "Unavailable"}</span>
      </div>
    </>
  );
}
