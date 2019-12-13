import { combineReducers } from 'redux';
import { CounterReducer } from './counter.reducer';

export class IAppState {
  counter: any;   // you should create a custom type 
};

export const rootReducer = combineReducers<IAppState>({
  counter: CounterReducer
});


