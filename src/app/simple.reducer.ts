import {Action} from '@ngrx/store';

const VIETNAM = 'VIETNAM';
const ZHONGGUO = 'ZHONGGUO';

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
