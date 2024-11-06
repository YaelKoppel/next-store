import { NextResponse } from "next/server";
import { getAllDocuments,connectDatabase } from "@/services/mongo";

export async function GET(request: Request)
{

    const client=await connectDatabase();
    const books=await getAllDocuments(client,'books')
    client.close();
    return NextResponse.json({data:books});
}