import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo2.png';

import { Container } from './styles';

export default function Title() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
