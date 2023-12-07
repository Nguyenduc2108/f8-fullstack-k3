import { NextResponse } from "next/server";

export const middleware = (request) => {
  //Request
  const isAuth = true;
  const userAgent = request.headers.get("user-agent");
  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  //   const cookie = request.headers.get("cookie");
  //   const user = request.cookie.get("user");
  //   const email = request.cookies.get("email");
  //   console.log(cookie);
  //   console.log(user);
  //(   request.cookies.delete("user");

  //Response
  if (pathname.startsWith("/san-pham") && !isAuth) {
    const urlLogin = new URL("/auth/login", request.url);
    return NextResponse.redirect(urlLogin);
  }
  const response = NextResponse.next();
  response.headers.set("x-api-key", "1234");
  response.cookies.set({
    name: "abc",
    value: "xyz",
    maxAge: 3600,
    httpOnly: true,
  });
  response.cookies.delete("user");

  //Rewrite URL
  if (pathname.startsWith("/gioi-thieu")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
  return response;
};

export const config = {
  //   matcher: ["/san-pham/:path*", "/auth/login/:path*"],
  match: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
