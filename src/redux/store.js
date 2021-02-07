import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducer from './allReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    allReducer,
    compose(
        applyMiddleware(sagaMiddleWare),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleWare.run(rootSaga);


export default store;