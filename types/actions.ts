import {UserInfo} from './user';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';
export const USER_ADD_CART_ITEM = 'USER_ADD_CART_ITEM_REQUEST';

export enum Action {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
  USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST',
  USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS',
  USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR',
  USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR',
  USER_ADD_CART_ITEM = 'USER_ADD_CART_ITEM_REQUEST',
}
export interface UserLoginRequestAction {
  type: Action.USER_LOGIN_REQUEST;
}
export interface UserLoginSuccessAction {
  type: Action.USER_LOGIN_SUCCESS;
  payload: UserInfo;
}
export interface UserLoginErrorAction {
  type: Action.USER_LOGIN_ERROR;
  payload: string;
}
export interface UserSignupRequestAction {
  type: Action.USER_SIGNUP_REQUEST;
}
export interface UserSignupSuccessAction {
  type: Action.USER_SIGNUP_SUCCESS;
  payload: UserInfo;
}
export interface UserSignupErrorAction {
  type: Action.USER_SIGNUP_ERROR;
  payload: string;
}
export interface UserLogoutRequestAction {
  type: Action.USER_LOGOUT_REQUEST;
}
export interface UserLogoutSuccessAction {
  type: Action.USER_LOGOUT_SUCCESS;
}
export interface UserLogoutErrorAction {
  type: Action.USER_LOGOUT_ERROR;
  payload: string;
}
export interface UserAddCartItemAction {
  type: Action.USER_ADD_CART_ITEM;
  payload: string[];
}
export type UserActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserSignupErrorAction
  | UserSignupRequestAction
  | UserSignupSuccessAction
  | UserLogoutRequestAction
  | UserLogoutSuccessAction
  | UserLogoutErrorAction
  | UserAddCartItemAction;

export interface ErrorAction {
  type: Action | 'RESET';
  payload: Error;
}
export type AppActions = UserActionTypes;
