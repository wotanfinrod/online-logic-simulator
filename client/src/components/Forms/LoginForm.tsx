import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

const schema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(6),
});

export type LoginFormSchemaType = z.infer<typeof schema>;

const CardWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 24px 16px;
  background: #ffffff;
  border: 1.5px solid #d9d9d9;
  border-radius: 10px;
  & > input {
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
`;

type Props = {
  handleLogin: (data: LoginFormSchemaType) => void;
  isSubmitting: boolean;
};

export default function LoginForm(props: Props) {
  const { isSubmitting } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(schema),
  });
  const { t } = useTranslation();
  const processForm: SubmitHandler<LoginFormSchemaType> = async (
    data: LoginFormSchemaType
  ) => {
    props.handleLogin(data);
    reset();
  };

  return (
    <CardWrapper
      onSubmit={handleSubmit(processForm)}
      style={{ display: "flex", flexDirection: "column", width: 300 }}
    >
      <HeadWrapper>
        <div>Welcome back!</div>
        <div>Login your data to continue...</div>
      </HeadWrapper>

      <label htmlFor="email">Email</label>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Your email here"
      />
      <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

      <label htmlFor="password">Password</label>
      <input
        {...register("password", { required: true, minLength: 6 })}
        type="password"
        placeholder="Enter your password"
      />
      <ErrorMessage>{errors.password && errors.password.message}</ErrorMessage>

      <button disabled={isSubmitting}>{t("forms.loginForm.login")}</button>
    </CardWrapper>
  );
}
