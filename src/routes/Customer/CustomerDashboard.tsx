import { Button, Stack, Text, Title } from "@mantine/core";

const CustomerDashboard = () => {
  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi Trainer!</Text>
      <Button>Logout</Button>
    </Stack>
  );
};

export default CustomerDashboard;
