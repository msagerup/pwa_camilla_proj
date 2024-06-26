import { NextResponse, type NextRequest } from 'next/server';
const CODE = process.env.CAMILLA_TEMP_CODE!;

export async function middleware(request: NextRequest) {
  const auth_code = CODE;
  const uuid_code = request.cookies.get('uuid_code')?.value;

  if (request.url.includes('/login')) {
    // Ignore this route, continue the request
    return NextResponse.next();
  }

  // Check if uuid_code cookie is present
  if (!uuid_code) {
    console.log('UUID code is missing');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if auth_code matches uuid_code
  if (auth_code !== uuid_code) {
    console.log('Codes do not match');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If everything is fine, continue the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
