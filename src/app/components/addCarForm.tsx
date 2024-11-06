import { useState } from "react";

type Car = {
  make: string;
  model: string;
  year: number;
};

type AddCarFormProps = {
  onCarAdded: (car: Car) => void;
};

export default function AddCarForm({ onCarAdded }: AddCarFormProps) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCar = { make, model, year: Number(year) };

    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      });

      if (response.ok) {
        const result = await response.json();
        onCarAdded(result.data); // Call the function to update the car list
        setMake("");
        setModel("");
        setYear("");
      } else {
        console.error('Failed to add car:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
          className="border p-2"
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          className="border p-2"
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
          required
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Car
      </button>
    </form>
  );
}
