export const updateProfile = async (payload: {
  name: string;
  phone: string;
  address: string;
  avatar: string;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/me`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};
