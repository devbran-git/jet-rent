interface ReservationProps {
  nextReservation: Date;
}

export default function Reservation({ nextReservation }: ReservationProps) {
  return (
    <div className="flex items-center text-xs text-gray-500 lg:text-sm">
      <span className="mr-1 lg:hidden">Next reservation: </span>

      <span className="lg:hidden">
        {nextReservation.toLocaleDateString("pt-BR", {
          month: "numeric",
          day: "numeric",
        })}
      </span>

      <span className="hidden lg:block">
        {new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}{" "}
        -{" "}
      </span>

      <span className="hidden lg:block">
        {nextReservation.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
  );
}
