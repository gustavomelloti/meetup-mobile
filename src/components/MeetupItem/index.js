import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import {
  cancelSubscription,
  doSubscription,
} from '../../store/modules/subscription/actions';

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
  const loading = useSelector(state => state.subscription.loading);

  function handleSubscription() {}

  function handleCancelSubscription() {
    dispatch(cancelSubscription(data.id));
  }

  function handleSubscription() {
    dispatch(doSubscription(data.id));
  }

  return (
    <Container>
      <Image
        style={{ height: 150 }}
        source={{
          uri: data.banner.url,
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
        <SubscriptionButton loading={loading} onPress={handleSubscription}>
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
