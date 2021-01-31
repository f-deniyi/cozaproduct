import { watchKeyLoadSaga } from './publicKey/saga';
import { watchProductLoadSaga } from './product/saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        watchProductLoadSaga(),
        watchKeyLoadSaga()]);
}
