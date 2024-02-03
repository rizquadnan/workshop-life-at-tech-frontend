import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { register, RegisterRequest, registerRequestSchema } from "@/api/auth";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const form = useForm<RegisterRequest>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      passwordConfirm: "",
      whatsapp: "",
    },
    validate: zodResolver(registerRequestSchema),
  });

  const handleRegister = async (val: RegisterRequest) => {
    try {
      setIsLoading(true);
      await register({
        userType: searchParam.get("user_type") as "trainer" | "customer",
        email: val.email,
        name: val.name,
        password: val.password,
        passwordConfirm: val.passwordConfirm,
        whatsapp: val.whatsapp,
      });

      notifications.show({
        title: "Success!",
        message: "Redirecting you to login...",
        onClose: () =>
          navigate(`/login?user_type=${searchParam.get("user_type")}`),
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
      <Title order={1}>Register</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>

      <form onSubmit={form.onSubmit((val) => handleRegister(val))}>
        <Stack>
          <TextInput label="Name" {...form.getInputProps("name")} />
          <TextInput label="Email" {...form.getInputProps("email")} />
          <TextInput label="Whatsapp" {...form.getInputProps("whatsapp")} />
          <PasswordInput label="Password" {...form.getInputProps("password")} />
          <PasswordInput
            label="Password Confirm"
            {...form.getInputProps("passwordConfirm")}
          />
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
          <Stack>
            <Anchor
              component={Link}
              to={`/login?user_type=${searchParam.get("user_type")}`}
            >
              Login
            </Anchor>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Register;
