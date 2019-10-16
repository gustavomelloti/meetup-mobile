import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Title from '../../components/Title';
import MeetupItem from '../../components/MeetupItem';

import { loadSubscriptionsRequest } from '../../store/modules/subscription/actions';

import { Container, List } from './styles';

export default function Subscription() {
  const dispatch = useDispatch();
  const subscriptions = useSelector(state => state.subscription.subscriptions);

  useEffect(() => {
    dispatch(loadSubscriptionsRequest());
  }, []);

  return (
    <Background>
      <Container>
        <Title />
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupItem showCancel data={item.Meetup} />
          )}
        />
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
