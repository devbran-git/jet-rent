interface ReservationProps {
  nextReservation: Date;
}

export default function Reservation({ nextReservation }: ReservationProps) {
  return (
    <>
      <p className="text-xs text-gray-500 lg:hidden">
        Next reservation:{" "}
        {nextReservation.toLocaleDateString("pt-BR", {
          month: "numeric",
          day: "numeric",
        })}
      </p>

      <p className="hidden text-sm text-gray-500 lg:block">Jul 6 - Jul 12</p>
    </>
  );
}
