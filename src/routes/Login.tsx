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
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { login, LoginRequest, loginRequestSchema } from "@/api/auth";

const Login = () => {
  const [searchParam] = useSearchParams();

  const form = useForm<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginRequestSchema),
  });

  const handleLogin = async (val: LoginRequest) => {
    try {
      await login({
        userType: searchParam.get("user_type") as "trainer" | "customer",
        email: val.email,
        password: val.password,
      });

      notifications.show({
        title: "Success!",
        message: "Redirecting you to app...",
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
          <Button type="submit">Submit</Button>
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
