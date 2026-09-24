import { Flex, TextField, Button } from "@radix-ui/themes";
import React from "react";
import LoginForm from "../_components/LoginForm";
import { login } from "@/lib/auth/login";

const PageLogin = () => {
  return <LoginForm />;
};

export default PageLogin;
