import Image, { StaticImageData } from "next/image";

interface CarProps {
  name: string;
  photo: StaticImageData;
  available: boolean;
}

export default function Car({ name, photo, available }: CarProps) {
  return (
    <div className={`relative ${!available ? "opacity-50" : ""} flex items-center gap-5 lg:gap-2`}>
      <Image className="min-w-[85px] object-cover lg:min-w-[49px]" src={photo} alt={name} width={85} height={85} />
      <span className="hidden font-semibold text-sm text-gray-900 lg:block">{name}</span>
    </div>
  );
}
