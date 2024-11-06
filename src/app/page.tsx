"use client";
import { useEffect, useState } from "react";
import Car from "./components/car"; 

// Define the structure of a car object
type CarObject = {
  _id: string;
  make: string;
  model: string;
  year: number;
};

export default function Home() {
  const [cars, setCars] = useState<CarObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const result: { data: CarObject[] } = await response.json();
          setCars(result.data);
        } else {
          console.error('Failed to fetch cars:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Cars List</h1>
      <div className="grid gap-4">
        {loading ? (
          <p>Loading cars...</p>
        ) : cars.length > 0 ? (
          cars.map((car) => (
            <Car key={car._id} car={car} /> // Render Car component for each car
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  );
}
