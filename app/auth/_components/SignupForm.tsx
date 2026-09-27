"use client";
import { useForm } from "react-hook-form";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { signup } from "@/lib/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [signupMessage, setSignupMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const result = await signup(data);
    setSignupMessage(result.message);
    if (!result.success) {
      return;
    } else {
      setTimeout(() => {
        router.push("/auth/signup/signupSuccess");
      }, 2000);
    }
  };
  return (
    <div dir="ltr" className="px-2 mx-auto my-30 max-w-sm border p-4 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="2">
          <label htmlFor="name">
            Name
            <TextField.Root
              id="name"
              {...register("name")}
              autoComplete="name"
              required
            />
          </label>
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
          <label htmlFor="confirm-password">
            Confirm Password
            <TextField.Root
              id="confirm-password"
              {...register("confirmPassword")}
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          <Button type="submit">Sign Up</Button>
          {signupMessage && <p>{signupMessage}</p>}
        </Flex>
      </form>
    </div>
  );
};

export default SignupForm;
