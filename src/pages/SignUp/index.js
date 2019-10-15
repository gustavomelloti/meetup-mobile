import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo2.png';
import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            autoCorrect={false}
            autoCaptitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
