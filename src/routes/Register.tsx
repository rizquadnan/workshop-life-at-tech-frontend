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
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { registerRequestSchema, RegisterType } from "@/api/auth";
const Register = () => {
  const [searchParam] = useSearchParams();

  const form = useForm<RegisterType>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      passwordConfirm: "",
      whatsapp: "",
    },
    validate: zodResolver(registerRequestSchema),
  });

  const handleRegister = (val: RegisterType) => {
    console.log(val);
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
          <Button type="submit">Submit</Button>
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
