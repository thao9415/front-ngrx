import {Action} from '@ngrx/store';

export const VIETNAM = 'VIETNAM';
export const ZHONGGUO = 'ZHONGGUO';

export function simpleReducer(state: string = 'Hello', action: Action) {
  switch (action.type) {
    case VIETNAM:
      return state = 'Xin chao';
    case ZHONGGUO:
      return state = '你 好';
    default:
      return state;
  }
}
