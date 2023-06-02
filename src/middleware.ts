import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(request)

  console.log(request.cookies.getAll())

  return NextResponse.redirect(new URL('/form', request.url));
}

export const config = {
  // matcher: '/matched-path',
  matcher: '/!(matched-path)',
};