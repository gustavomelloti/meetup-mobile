import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { loadSubscriptionsSuccess, loadSubscriptionsRequest } from './actions';

export function* loadSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');
    yield put(loadSubscriptionsSuccess(response.data));
  } catch (err) {
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

export default all([
  takeLatest('@subscription/LOAD_SUBSCRIPTION_REQUEST', loadSubscriptions),
  takeLatest('@subscription/CANCEL_SUBSCRIPTION_SUCCESS', cancelSubscription),
]);
