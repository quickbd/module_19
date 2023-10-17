import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const reqData = await req.json();
  const prisma = new PrismaClient();
  const regdate = new Date();
  try {
    let result = await prisma.user.update({
      where: { id: id },
      data: {
        firstName: reqData.firstName,
        lastName: reqData.lastName,
        mobile: reqData.mobile,
        email: reqData.email,
        password: reqData.password,
        registeredAt: regdate,
      },
    });

    return NextResponse.json({ status: "success", result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}

// Data update:(POST) localhost:3000/api/user/update?id=2
// Sample data:  object
