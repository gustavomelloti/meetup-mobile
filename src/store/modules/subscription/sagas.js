import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import {
  loadSubscriptionsSuccess,
  loadSubscriptionsRequest,
  loadSubscriptionsFailure,
} from './actions';

export function* loadSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');
    yield put(loadSubscriptionsSuccess(response.data));
  } catch (err) {
    yield put(loadSubscriptionsFailure());
    Alert.alert('Erro na atualização', 'Erro ao buscar inscrições');
  }
}

export function* cancelSubscription({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `subscriptions/${id}`);
    yield put(loadSubscriptionsRequest());
  } catch (err) {
    Alert.alert('Erro no cancelamento', 'Erro ao cancelar inscrição.');
  }
}

export function* doSubscription({ payload }) {
  try {
    const { id } = payload;
    yield call(api.post, `subscriptions/${id}`);
    Alert.alert('Inscrição confirmada!', 'Inscrição realizada com sucesso!');
  } catch (err) {
    Alert.alert(
      'Erro na inscrição',
      'Infelizmente não conseguimos processar sua inscrição. Verifique se você já está inscrito ou é o organizador deste Meetup.'
    );
  }
}

export default all([
  takeLatest('@subscription/LOAD_SUBSCRIPTION_REQUEST', loadSubscriptions),
  takeLatest('@subscription/CANCEL_SUBSCRIPTION', cancelSubscription),
  takeLatest('@subscription/DO_SUBSCRIPTION', doSubscription),
]);
