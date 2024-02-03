import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
const Login = () => {
  const [searchParam] = useSearchParams();

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>
      <Stack>
        <TextInput label="Email" />
        <PasswordInput label="Password" />
        <Button>Submit</Button>
        <Stack>
          <Anchor
            component={Link}
            to={`/register?user_type=${searchParam.get("user_type")}`}
          >
            Register
          </Anchor>
          <Anchor
            component={Link}
            to={`/forgot-password?user_type=${searchParam.get("user_type")}`}
          >
            Forgot Password
          </Anchor>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
