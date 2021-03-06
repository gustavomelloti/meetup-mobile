import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import Title from '../../components/Title';
import MeetupItem from '../../components/MeetupItem';

import { Container, List, Filter, DateFilter, Loading } from './styles';

export default function Meetup() {
  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get('meetups', {
        params: { date },
      });
      setMeetups(response.data);
      setLoading(false);
    }
    loadMeetups();
  }, [date]);

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Title />
        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color="#FFF" />
          </Loading>
        ) : (
          <>
            <Filter>
              <Icon
                name="chevron-left"
                size={30}
                color="#FFF"
                onPress={handlePrevDate}
              />
              <DateFilter>
                {format(date, "d 'de' MMMM", { locale: pt })}
              </DateFilter>
              <Icon
                name="chevron-right"
                size={30}
                color="#FFF"
                onPress={handleNextDate}
              />
            </Filter>
            <List
              data={meetups}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <MeetupItem showSubscription data={item} />
              )}
            />
          </>
        )}
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
