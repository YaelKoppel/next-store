type CarProps = {
    car: {
      _id: string;
      make: string;
      model: string;
      year: number;
    };
  };
  
  export default function Car({ car }: CarProps) {
    return (
      <div className="p-4 border border-gray-300 rounded">
        <p><strong>Make:</strong> {car.make}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Year:</strong> {car.year}</p>
      </div>
    );
  }
  