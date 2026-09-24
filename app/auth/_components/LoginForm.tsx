"use client";
import { login } from "@/lib/auth/login";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    login(data);
  };
  return (
    <div dir="ltr" className="mx-auto max-w-sm p-4 border rounded my-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="2">
          <label htmlFor="email">
            Email
            <TextField.Root
              id="email"
              {...register("email")}
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <TextField.Root
              id="password"
              {...register("password")}
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>
          <Button type="submit">Login</Button>
        </Flex>
      </form>
    </div>
  );
};

export default LoginForm;
