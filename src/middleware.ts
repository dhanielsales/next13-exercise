import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');
}

export const config = {
  matcher: '/form',
  // matcher: '/((?!login|_next/static|_next/image|favicon.ico).*)'
}