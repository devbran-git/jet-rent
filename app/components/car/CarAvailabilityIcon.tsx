import Image from "next/image";

import available from "@/public/assets/img/available.svg";
import unavailable from "@/public/assets/img/unavailable.svg";

interface CarAvailabilityIconProps {
  available: boolean;
}

export default function CarAvailabilityIcon({ available: isAvailable }: CarAvailabilityIconProps) {
  return (
    <Image
      className="absolute top-[.5px] left-[.5px] lg:hidden"
      src={isAvailable ? available : unavailable}
      alt=""
      width={24}
      height={24}
    />
  );
}
