import CarList from "./components/CarList";

import { cars } from "./mocks/cars";

export default function Home() {
  return (
    <main className="pt-6 px-4 pb-4 lg:p-8">
      <CarList cars={cars} />
    </main>
  );
}
