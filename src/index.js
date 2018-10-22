import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import statusReducer from './store/reducers/statusReducer';
import contentReducer from './store/reducers/contentReducer';
import movieReducer from './store/reducers/movieReducer';
import {watchSectionsSaga, watchMovieSaga, watchPlayerSaga} from './store/sagas/index';

import './sass/main.scss';
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;

const rootReducer = combineReducers({
    status: statusReducer,
    content: contentReducer,
    selected: movieReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchSectionsSaga);
sagaMiddleware.run(watchMovieSaga);
sagaMiddleware.run(watchPlayerSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));