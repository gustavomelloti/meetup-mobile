import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import Title from '../../components/Title';
import MeetupItem from '../../components/MeetupItem';

import { Container, List } from './styles';

export default function Meetup() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

  return (
    <Background>
      <Container>
        <Title />
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <MeetupItem showSubscription data={item} />}
        />
      </Container>
    </Background>
  );
}

Meetup.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
