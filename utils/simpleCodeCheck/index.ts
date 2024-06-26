import { NextRequest, NextResponse } from 'next/server';
const CODE = process.env.CAMILLA_TEMP_CODE!;

export const simpleCodeLogin = (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  console.log(request);

  const auth_code = CODE;

  const uuid_code = request.cookies.get('uuid_code')?.value;
  console.log(`Origin: ${request.nextUrl.origin}`); // Log the origin
  console.log(`Auth code: ${auth_code}, UUID code: ${uuid_code}`); // Log the codes

  console.log(request.url);

  return NextResponse.redirect(new URL('/login', request.url));

  if (auth_code === uuid_code) {
    return NextResponse.redirect(`${request.nextUrl.origin}/dashboard`);
  } else {
    console.log('Codes do not match');
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
  }
  //   }

  console.log('dfd');

  // Not correct code.
};
