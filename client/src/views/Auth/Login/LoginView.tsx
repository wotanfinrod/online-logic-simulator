import LoginForm, { LoginFormSchemaType } from "@/components/Forms/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function LoginView({}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const loginHandler = async (data: LoginFormSchemaType) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/auth/me/" + data.email);
    }, 1234);
  };

  return (
    <div>
      <div>Login View</div>
      <LoginForm handleLogin={loginHandler} isSubmitting={isSubmitting} />
    </div>
  );
}
