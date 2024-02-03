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
import { zodResolver } from "mantine-form-zod-resolver";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { LoginRequest, loginRequestSchema } from "@/api/auth";
const Login = () => {
  const [searchParam] = useSearchParams();

  const form = useForm<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginRequestSchema),
  });

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>

      <form onSubmit={form.onSubmit((val) => console.log(val))}>
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
