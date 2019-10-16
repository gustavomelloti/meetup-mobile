import React from 'react';

import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { cancelSubscription } from '../../store/modules/subscription/actions';

import {
  Container,
  Name,
  Date,
  Info,
  Location,
  Organizer,
  SubscriptionButton,
  CancellSubscriptionButton,
  InfoRow,
} from './styles';

export default function MeetupItem({
  data,
  showSubscription = false,
  showCancel = false,
}) {
  const dispatch = useDispatch();

  function handleSubscription() {}

  function handleCancelSubscription() {
    dispatch(cancelSubscription(data.id));
  }

  return (
    <Container>
      <Image
        style={{ height: 150 }}
        source={{
          uri:
            'https://insperiencia.com.br/blog/wp-content/uploads/2017/05/palestra-vamos-subir.jpg',
        }}
      />
      <Info>
        <Name>{data.title}</Name>
        <InfoRow>
          <Icon name="event" size={15} color="#999999" />
          <Date>
            {format(parseISO(data.date), "dd 'de' MMMM', às ' HH:mm'h'", {
              locale: pt,
            })}
          </Date>
        </InfoRow>
        <InfoRow>
          <Icon name="place" size={15} color="#999999" />
          <Location>{data.location}</Location>
        </InfoRow>
        <InfoRow>
          <Icon name="person" size={15} color="#999999" />
          <Organizer>{`Organizador: ${data.user.name}`}</Organizer>
        </InfoRow>
      </Info>
      {showSubscription && (
        <SubscriptionButton onPress={handleSubscription}>
          Realizar inscrição
        </SubscriptionButton>
      )}
      {showCancel && (
        <CancellSubscriptionButton onPress={handleCancelSubscription}>
          Cancelar inscrição
        </CancellSubscriptionButton>
      )}
    </Container>
  );
}
