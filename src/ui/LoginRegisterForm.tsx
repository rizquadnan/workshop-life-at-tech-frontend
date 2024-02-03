import { Anchor, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

const LoginRegisterForm = ({
  type,
  userType,
  onSubmit,
}: {
  type: "login" | "register";
  userType: string;
  onSubmit: (formVal: { email: string; password: string }) => void;
}) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        if (!value) {
          return "Email is required";
        }

        return /^\S+@\S+$/.test(value) ? null : "Invalid email";
      },
      password: (value) => {
        if (!value) {
          return "Password is required";
        }
        return value.length > 8 ? null : "invalid password";
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit((val) => onSubmit(val))}>
      <Stack>
        <TextInput label="Email" {...form.getInputProps("email")} />
        <PasswordInput label="Password" {...form.getInputProps("password")} />
        <Button type="submit">Submit</Button>
        <Stack>
          <Anchor
            component={Link}
            to={`/${type === "login" ? "register" : "login"}?user_type=${userType}`}
          >
            {type === "login" ? "Register" : "Login"}
          </Anchor>
          <Anchor
            component={Link}
            to={`/forgot-password?user_type=${userType}`}
          >
            Forgot Password
          </Anchor>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginRegisterForm;
