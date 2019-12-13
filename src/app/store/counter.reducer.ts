import { INCREMENT1, DECREMENT1, INCREMENT2, DECREMENT2 } from '../actions/counter.actions';

const INITIAL_STATE = { value1: 0 ,value2:0};

export function CounterReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case INCREMENT1:
      console.log(state);
      return { value1: state.value1 + 1,value2:state.value2 };

    case DECREMENT1:
      return { value1: state.value1 - 1,value2:state.value2 };
      case INCREMENT2:
          console.log(state);
          return { value2: state.value2 + 1,value1:state.value1 };
    
        case DECREMENT2:
          return { value2: state.value2 - 1,value1:state.value1 };

    default:
      return state;
  }
}

