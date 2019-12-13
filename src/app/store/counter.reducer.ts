import { SUBMIT,ISFOCUSEDFIRSTNAME,ISFOCUSEDLASTNAME } from '../actions/counter.actions';
import {formProperties} from '../model/formProperties'
import { from } from 'rxjs';
 let fName:formProperties={value:"Hello",isFocused:false,isTouched:false}
 let lName:formProperties={value:"Hello",isFocused:false,isTouched:false}

const INITIAL_STATE = { "value1": fName ,"value2":lName};

export function CounterReducer(state = INITIAL_STATE, action: any): any {
  console.log(action.type);
  switch (action.type) {
    case SUBMIT:
      state.value1.value=action.data.fName;
      state.value2.value=action.data.lName;
      break;
    case ISFOCUSEDFIRSTNAME:
      state.value1.isTouched=true;
      state.value1.isFocused=!state.value1.isFocused;
      break;
    case ISFOCUSEDLASTNAME:
      state.value2.isTouched=true;
      state.value2.isFocused=!state.value2.isFocused;

        break;
    default:
      break;
    
  }
  return state;
}

