import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './Components/App/index';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//import ProviderWrapper from './Components/Provider';
import rootReducer from './Types'
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import mySaga from './sagas/sagas';
//import {IntlProvider} from 'react-intl';
import Wrapper from './Components/Wrapper';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(mySaga);


ReactDOM.render(
  <>
  <Provider store={store}>
  <Wrapper>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  
  </Wrapper>
  </Provider>
    </>
    ,
  document.getElementById('root')
);