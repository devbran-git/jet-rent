import Image, { StaticImageData } from "next/image";

interface CarImageProps {
  name: string;
  photo: StaticImageData;
}

export default function CarImage({ name, photo }: CarImageProps) {
  return <Image className="min-w-[85px] object-cover lg:min-w-[49px]" src={photo} alt={name} width={85} height={85} loading="lazy" />;
}
