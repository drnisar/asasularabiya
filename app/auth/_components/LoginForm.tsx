"use client";
import { login } from "@/lib/auth/login";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loginMessage, setLoginMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const result = await login(data);
    if (result.success) {
      setLoginMessage(result.text);
      router.push("/course"); // Redirect to the home page or any other page after successful login
    } else {
      setLoginMessage(result.text);
    }
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
          <Button variant="ghost" onClick={() => router.push("/auth/signup")}>
            Sign Up
          </Button>
          {loginMessage && <p>{loginMessage}</p>}
        </Flex>
      </form>
    </div>
  );
};

export default LoginForm;
