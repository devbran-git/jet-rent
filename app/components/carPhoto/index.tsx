import Image, { StaticImageData } from "next/image";

interface CarPhotoProps {
  name: string;
  photo: StaticImageData;
}

export default function CarPhoto({ name, photo }: CarPhotoProps) {
  return (
    <div className="lg:flex lg:items-center lg:gap-2">
      <Image className="min-w-[85px] object-cover lg:min-w-[49px]" src={photo} alt={name} width={85} height={85} />
      <span className="hidden font-semibold text-sm text-gray-900 lg:block">{name}</span>
    </div>
  );
}
