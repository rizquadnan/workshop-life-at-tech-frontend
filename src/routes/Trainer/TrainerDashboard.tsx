import { Button, Code, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { User } from "@/api/auth";
import { useAuth } from "@/providers/AuthProvider";

const TrainerDashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>
        Hi Trainer! App is under development. Thanks for the interest! This is
        youre user information:
      </Text>
      <Code>{JSON.stringify(auth.user as User)}</Code>
      <Button
        onClick={() => {
          auth.onLogout();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </Stack>
  );
};

export default TrainerDashboard;
