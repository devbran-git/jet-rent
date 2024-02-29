interface AvailabilityTagProps {
  available: boolean;
}

export default function AvailabilityTag({ available }: AvailabilityTagProps) {
  return (
    <div className={`w-max py-1 px-[10px] rounded-md  ${available ? "bg-green-100" : "bg-red-100"}`}>
      <span className="font-medium text-sm text-green-800">{available ? "Available" : "Unavailable"}</span>
    </div>
  );
}
