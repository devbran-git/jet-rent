import Image from "next/image";

import star from "@/public/assets/img/star.svg";

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: rating }).map((_, index) => (
        <Image key={index} src={star} alt="" />
      ))}
    </div>
  );
}
