import rootReducer, {AppStateType} from '../reducers';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import Cookie from 'js-cookie';
import {AppActions} from '@appTypes/actions';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = userInfo
  ? {
      userStatus: {
        auth: true,
        userInfo: {...userInfo},
        loading: false,
        error: '',
      },
    }
  : {};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppStateType, AppActions>),
    //@ts-ignore
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   //@ts-ignore
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
