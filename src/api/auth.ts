import { fetcher } from "@/lib";

export const login = async ({
  userType,
  email,
  password,
}: {
  userType: string;
  email: string;
  password: string;
}) => {
  return await fetcher.post(`/login/${userType}`, { email, password });
};

export const register = async ({
  userType,
  name,
  email,
  password,
  passwordConfirm,
  whatsapp,
}: {
  userType: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  whatsapp: string;
}) => {
  return await fetcher.post(`/register/${userType}`, {
    email,
    name,
    password,
    passwordConfirm,
    whatsapp,
  });
};
