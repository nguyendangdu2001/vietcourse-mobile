import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from 'redux/reducers';
// import {AppStateType} from '../redux/reducer';
import {AppActions} from './actions';

export type TAction<T> = ThunkAction<T, AppStateType, null, AppActions>;
export type TDispatch = ThunkDispatch<AppStateType, null, AppActions>;
