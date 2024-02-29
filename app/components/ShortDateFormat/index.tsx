interface ShortDateFormatProps {
  nextReservation: Date;
}

export default function ShortDateFormat({ nextReservation }: ShortDateFormatProps) {
  return (
    <>
      {nextReservation.toLocaleDateString("pt-BR", {
        month: "numeric",
        day: "numeric",
      })}
    </>
  );
}
