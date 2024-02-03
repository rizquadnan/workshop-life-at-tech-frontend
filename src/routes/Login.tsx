import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { login, LoginRequest, loginRequestSchema } from "@/api/auth";
import { useAuth } from "@/providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginRequestSchema),
  });

  const handleLogin = async (val: LoginRequest) => {
    try {
      setIsLoading(true);
      const res = await login({
        userType: searchParam.get("user_type") as "trainer" | "customer",
        email: val.email,
        password: val.password,
      });

      auth.onLoginSuccess(res.token, res.user);

      notifications.show({
        title: "Success!",
        message: "Redirecting you to app...",
        onClose: () => navigate("/app-trainer"),
      });
    } catch (error) {
      if (isAxiosError(error)) {
        notifications.show({
          title: error.message,
          message: error.response?.data?.message ?? "Please try again",
          color: "red",
        });
        return;
      }

      notifications.show({
        title: "Something went wrong",
        message: "Please try again later",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>

      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack>
          <TextInput label="Email" {...form.getInputProps("email")} />
          <PasswordInput label="Password" {...form.getInputProps("password")} />
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
          <Stack>
            <Anchor
              component={Link}
              to={`/register?user_type=${searchParam.get("user_type")}`}
            >
              Register
            </Anchor>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
