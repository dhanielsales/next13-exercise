import { NextRequest, NextResponse } from "next/server";

export async function GET(resquest: NextRequest, context: { params: { id: string } } ) {
  return NextResponse.json({ message: "Hello from the backend!", context });
}
