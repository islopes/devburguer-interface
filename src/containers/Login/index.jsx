import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/button';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './style';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          {' '}
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a>Clique aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
}
