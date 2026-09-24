import { Button, Flex, TextField } from "@radix-ui/themes";
import { signup } from "./actions";
import SignupForm from "../_components/SignupForm";

const signupMessages = {
  created: { text: "Your account has been created.", success: true },
  "missing-fields": { text: "All fields are required.", success: false },
  "password-mismatch": { text: "Passwords do not match.", success: false },
  "password-too-short": {
    text: "Password must be at least 8 characters.",
    success: false,
  },
  "email-exists": {
    text: "An account with this email already exists.",
    success: false,
  },
  failed: {
    text: "Unable to create your account. Please try again.",
    success: false,
  },
} as const;

type Props = {
  searchParams: Promise<{ status?: keyof typeof signupMessages }>;
};

const PageSignup = async ({ searchParams }: Props) => {
  const { status } = await searchParams;
  const message = status ? signupMessages[status] : undefined;

  return <SignupForm />;
};

export default PageSignup;
