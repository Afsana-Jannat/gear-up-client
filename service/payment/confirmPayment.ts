'use server';

export async function confirmPayment(sessionId: string) {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/success?session_id=${sessionId}`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
}
