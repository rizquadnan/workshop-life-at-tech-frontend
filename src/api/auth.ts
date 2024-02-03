import { AxiosResponse } from "axios";
import { TypeOf, z } from "zod";

import { fetcher } from "@/lib";

export const loginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginRequest = TypeOf<typeof loginRequestSchema>;

export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  whatsapp: string;
};

export type LoginResponse = {
  data: {
    token: string;
    user: User;
  };
};

export const login = async ({
  userType,
  email,
  password,
}: LoginRequest & { userType: string }) => {
  const res = await fetcher.post<object, AxiosResponse<LoginResponse>>(
    `/v1/auth/login/${userType}`,
    { email, password },
  );

  return res.data.data;
};

export const registerRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string()
    .min(8, "Password confirm must be at least 8 characters"),
  whatsapp: z.string().min(1, "Whatsapp is required"),
});

export type RegisterRequest = TypeOf<typeof registerRequestSchema>;

export const register = async ({
  userType,
  name,
  email,
  password,
  passwordConfirm,
  whatsapp,
}: RegisterRequest & {
  userType: string;
}) => {
  return await fetcher.post(`/v1/auth/register/${userType}`, {
    email,
    name,
    password,
    passwordConfirm,
    whatsapp,
  });
};
