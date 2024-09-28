import { userSchema } from "@/lib/zodValidations";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.users.findMany();
  console.log(users);
  return NextResponse.json({ message: "Usuarios:",data:users });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  
    const validatedData = userSchema.parse(data);

    const newUser = await prisma.users.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        password: validatedData.password,
      },
    });
    console.log(newUser);

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating user" }, {status: 500});
  }
}
