import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("token");
  const protectedPaths = ["/dashboard", "/FastReservePage"];
  if ( protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/houses")) {
    return NextResponse.rewrite(new URL("/api/houses", request.url));
  }

  return NextResponse.next();
};

export const config = {
    matcher:["/dashboard/:path","/dashboard", '/FastReservePage/:path']
}