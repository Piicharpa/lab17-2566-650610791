import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Picharpa eamkanitchart",
    studentId: "650610791",
  });
};
