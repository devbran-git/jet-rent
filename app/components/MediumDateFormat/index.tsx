interface MediumDateFormatProps {
  nextReservation: Date;
}

export default function MediumDateFormat({ nextReservation }: MediumDateFormatProps) {
  return (
    <p>
      {new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}{" "}
      -{" "}
      {nextReservation.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}
    </p>
  );
}
