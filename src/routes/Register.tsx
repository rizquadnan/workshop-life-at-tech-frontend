import { Stack, Text, Title } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

import LoginRegisterForm from "@/ui/LoginRegisterForm";
const Register = () => {
  const [searchParam] = useSearchParams();

  return (
    <Stack>
      <Title order={1}>Register</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>
      <LoginRegisterForm
        type="register"
        userType={searchParam.get("user_type") as string}
      />
    </Stack>
  );
};

export default Register;
