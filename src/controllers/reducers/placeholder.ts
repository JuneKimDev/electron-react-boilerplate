import { Reducer } from 'redux';
import { IAction } from '../../types';

const initialState = {
  testStr: '',
};

const reducer: Reducer<any, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'placeholder':
      console.log(action.payload);
      return { ...state, testStr: action.payload };
    default:
      return state;
  }
};

export default reducer;
