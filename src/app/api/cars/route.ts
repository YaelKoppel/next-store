import { NextResponse } from "next/server";
import { getAllDocuments,connectDatabase,insertDocument } from "@/services/mongo";

export async function GET(request: Request)
{

    const client=await connectDatabase();
    const cars=await getAllDocuments(client,'cars')
    client.close();
    return NextResponse.json({data:cars});
}

export async function POST(request: Request) {
    const client = await connectDatabase();
  
    try {
      const newCar = await request.json();
      const insertedCarId = await insertDocument(client, 'cars', newCar);
  
      client.close();
      return NextResponse.json({ data: { ...newCar, _id: insertedCarId } });
    } catch (error) {
      client.close();
      return NextResponse.json({ error: 'Failed to add document' }, { status: 500 });
    }
  }

export async function DELETE(request: Request)
{

    const client=await connectDatabase();
    const cars=await getAllDocuments(client,'cars')
    client.close();
    return NextResponse.json({data:cars});
}