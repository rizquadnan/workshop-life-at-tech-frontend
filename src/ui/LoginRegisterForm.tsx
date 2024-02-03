import { Anchor, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
const LoginRegisterForm = ({
  type,
  userType,
}: {
  type: "login" | "register";
  userType: string;
}) => {
  return (
    <Stack>
      <TextInput label="Email" />
      <PasswordInput label="Password" />
      <Button>Submit</Button>
      <Stack>
        <Anchor
          component={Link}
          to={`/${type === "login" ? "register" : "login"}?user_type=${userType}`}
        >
          {type === "login" ? "Register" : "Login"}
        </Anchor>
        <Anchor component={Link} to={`/forgot-password?user_type=${userType}`}>
          Forgot Password
        </Anchor>
      </Stack>
    </Stack>
  );
};

export default LoginRegisterForm;
