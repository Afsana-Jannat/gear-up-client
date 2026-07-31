'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt, { JwtPayload } from 'jsonwebtoken';

export type AuthState = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
  };
};

export const loginAction = async (
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> => {
  const email = formData.get('email');
  const password = formData.get('password');

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      statusCode: result.statusCode,
      message: result.message || 'Login failed',
    };
  }

  const cookieStore = await cookies();

  cookieStore.set('accessToken', result.data.accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });

  cookieStore.set('refreshToken', result.data.refreshToken, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });

  const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
  console.log(decodedToken);

  switch (decodedToken.role) {
    case 'CUSTOMER':
      redirect('/customer-dashboard');

    case 'PROVIDER':
      redirect('/provider-dashboard');

    case 'ADMIN':
      redirect('/admin-dashboard');

    default:
      redirect('/');
  }
};

// register
export const registerAction = async (
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> => {
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    avatar: formData.get('avatar'),
    role: formData.get('role'),
  };

  // 1. Register
  const registerRes = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  const registerResult = await registerRes.json();

  if (!registerRes.ok || !registerResult.success) {
    return {
      success: false,
      message: registerResult.message || 'Registration failed',
    };
  }

  // 2. Auto Login
  const loginRes = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    }
  );

  const loginResult = await loginRes.json();

  if (!loginRes.ok || !loginResult.success) {
    return {
      success: false,
      message: 'Account created, but automatic login failed.',
    };
  }

  // 3. Save Cookies
  const cookieStore = await cookies();

  cookieStore.set('accessToken', loginResult.data.accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });

  // 4. Decode Token
  const decodedToken = jwt.decode(loginResult.data.accessToken) as JwtPayload;

  // 5. Redirect by Role
  switch (decodedToken.role) {
    case 'CUSTOMER':
      redirect('/customer-dashboard');

    case 'PROVIDER':
      redirect('/provider-dashboard');

    case 'ADMIN':
      redirect('/admin-dashboard');

    default:
      redirect('/');
  }
};
