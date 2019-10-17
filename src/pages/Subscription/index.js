import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Title from '../../components/Title';
import MeetupItem from '../../components/MeetupItem';

import { loadSubscriptionsRequest } from '../../store/modules/subscription/actions';

import { Container, List, Loading } from './styles';

export default function Subscription() {
  const dispatch = useDispatch();
  const subscriptions = useSelector(state => state.subscription.subscriptions);
  const loading = useSelector(state => state.subscription.loading);

  useEffect(() => {
    dispatch(loadSubscriptionsRequest());
  }, []);

  return (
    <Background>
      <Container>
        <Title />
        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color="#FFF" />
          </Loading>
        ) : (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <MeetupItem showCancel data={item.Meetup} />
            )}
          />
        )}
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
