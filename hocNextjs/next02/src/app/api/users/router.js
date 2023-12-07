// --> GET /api/users
import { NextResponse } from "next/server";

export const GET = (request) => {
  const user = {
    name: "Hoang An",
    email: "hoangan.web@gamil.com",
  };
  //   return Response.json(user);
  return NextResponse.json(user, { status: 404 });
};

// --> POST api/users
export const POST = async (request) => {
  return NextResponse.json({ status: "ok", body: request.body });
};
//Route Handler
