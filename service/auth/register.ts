import axiosInstance from '@/lib/axios';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'PROVIDER';
}

export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await axiosInstance.post('/api/users/register', payload);

  return data;
};
