import { Button, Stack, Text, Title } from "@mantine/core";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function AppSwitcher() {
  const navigate = useNavigate();
  const handleSelectUserType = (userType: "trainer" | "customer") => {
    navigate({
      pathname: "/login",
      search: createSearchParams({ user_type: userType }).toString(),
    });
  };
  return (
    <Stack>
      <Title order={1}>Baret PT App</Title>
      <Text>Are you a trainer or customer ?</Text>
      <Stack>
        <Button
          variant="outline"
          fullWidth
          onClick={() => handleSelectUserType("trainer")}
        >
          Trainer
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={() => handleSelectUserType("customer")}
        >
          Customer
        </Button>
      </Stack>
    </Stack>
  );
}
