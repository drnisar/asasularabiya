import SignupForm from "../_components/SignupForm";
import { requireSignedOut } from "@/lib/auth/session";

const PageSignup = async () => {
  await requireSignedOut();
  return <SignupForm />;
};

export default PageSignup;
