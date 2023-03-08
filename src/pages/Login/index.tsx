import * as S from "./styles";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const { control, formState: { errors, isValid }} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  function onSubmit(){
    console.log("Login realizado")
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.Column>
          <S.Title>Login</S.Title>
          <S.Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <S.Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <S.Spacing />
          {isValid === true ? (
            <Button title="Entrar" onClick={onSubmit} disabled={false} />
          ): (
            <Button className="disabled" title="Entrar" onClick={onSubmit} disabled={true} />
          )}
        </S.Column>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
