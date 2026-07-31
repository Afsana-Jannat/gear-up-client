import axiosInstance from '@/lib/axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
  const { data } = await axiosInstance.post('/api/auth/login', payload);

  return data;
};
