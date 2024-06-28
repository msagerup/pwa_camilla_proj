'use server';
import { cookies } from 'next/headers';
const CODE = process.env.CAMILLA_TEMP_CODE!;

export async function loginFormAction({ data }: { data: { pin: string } }) {
  const code = Number(CODE);
  const pinCode = Number(data.pin);

  if (code === pinCode) {
    console.log(33);

    cookies().set({
      name: 'uuid_code',
      value: pinCode.toString(),
      path: '/',
      sameSite: 'strict',
      maxAge: 31536000,
      httpOnly: true,
    });

    return { status: 200, message: 'Code is correct, redirecting' };
  }
  // Else wrong pin code
  return {
    status: 401,
    message: 'You entered the wrong code, please try again.',
  };

}
