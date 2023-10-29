import React from "react";
import styled from "styled-components";
import Img1 from "./assets/bk.png";
import Img2 from "./assets/img.svg";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const SideSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Img1}) no-repeat;
  background-size: 100% 102%;
  @media (max-width: 780px) {
    display: none;
  }
`;

const SideImage = styled.img`
  width: 50%;
`;

const MainSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  max-width: 450px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
`;

const Separator = styled.div`
  width: 150px;
  height: 4px;
  background-color: #843bc7;
  margin-bottom: 24px;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LabelCredential = styled.label`
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FormControl = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 30px;
  font-size: 1.1em;
  width: 100%;
  background: #e6e6e6;
  color: #333;
  letter-spacing: 0.5px;
  padding: 14px 64px;
`;

const Icon = styled.i`
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  transition: color 0.4s;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxRemember = styled.input`
  margin: 0 0.5rem 0 1.5rem;
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  border-radius: 30px;
  font-size: 1.1em;
  width: 100%;
  background: #e6e6e6;
  color: #fff;
  padding: 14px 64px;
  margin: 32px auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background-image: linear-gradient(to right, #8b33c5, #15a0e1);
  cursor: pointer;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.9;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <SideSection>
        <SideImage src={Img2} alt="" />
      </SideSection>
      <MainSection>
        <LoginContainer>
          <Title>Login</Title>
          <Separator />
          <LoginForm>
            <LabelCredential>User ID</LabelCredential>
            <FormControl>
              <Input type="text" placeholder="Username" />
              <Icon className="fas fa-user"></Icon>
            </FormControl>
            <LabelCredential>Password</LabelCredential>
            <FormControl>
              <Input type="password" placeholder="Password" />
              <Icon className="fas fa-lock"></Icon>
            </FormControl>
            <RememberMe>
              <CheckboxRemember type="checkbox" />
              <label>Remember Me</label>
            </RememberMe>
            <SubmitButton>Login</SubmitButton>
          </LoginForm>
        </LoginContainer>
      </MainSection>
    </Container>
  );
};

export default LoginPage;
