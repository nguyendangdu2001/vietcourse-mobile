import {AppStateType} from '.';

export const loadingReducer = (
  state: {[key: string]: boolean} = {},
  action: {type: string},
) => {
  const {type} = action;
  if (type === 'RESET') return {};
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE|ERROR)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName.toLowerCase()]: requestState === 'REQUEST',
  };
};
export const createLoadingSelector = (actions: string[]) => (
  state: AppStateType,
) => {
  // returns true only when all actions is not loading
  return actions?.some((action) => state.loading?.[action?.toLowerCase()]);
};
