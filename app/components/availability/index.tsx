interface AvailabilityProps {
  isAvailable: boolean;
}

export default function Availability({ isAvailable }: AvailabilityProps) {
  return (
    <div className={`w-max py-1 px-[10px] rounded-md  ${isAvailable ? "bg-green-100" : "bg-red-100"} bg-green-100`}>
      <span className="text-sm text-green-800">{isAvailable ? "Available" : "Unavailable"}</span>
    </div>
  );
}
