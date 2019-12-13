import {
  SUBMITFORM1,
  SUBMITFORM2,
  ISFOCUSEDFIRSTNAME1,
  ISFOCUSEDLASTNAME1,
  ISFOCUSEDFIRSTNAME2,
  ISFOCUSEDLASTNAME2
} from "../actions/counter.actions";
import { formProperties } from "../model/formProperties";
import { from } from "rxjs";
let fName: formProperties = {
  value: "Hello",
  isFocused: false,
  isTouched: false
};
let lName: formProperties = {
  value: "world",
  isFocused: false,
  isTouched: false
};
let fName2: formProperties = {
  value: "I am",
  isFocused: false,
  isTouched: false
};
let lName2: formProperties = {
  value: "swar",
  isFocused: false,
  isTouched: false
};
let form1={fName:fName,lName:lName}
let form2={fName:fName2,lName:lName2}

const INITIAL_STATE = { value1: form1, value2: form2 };

export function CounterReducer(state = INITIAL_STATE, action: any): any {
  console.log(action.type);
  switch (action.type) {
    case SUBMITFORM1:
      state.value1.fName.value = action.data.fName;
      state.value1.lName.value = action.data.lName;
      break;
    case SUBMITFORM2:
      state.value2.fName.value = action.data.fName;
      state.value2.lName.value = action.data.lName;
      break;
    case ISFOCUSEDFIRSTNAME1:
      state.value1.fName.isTouched = true;
      state.value1.fName.isFocused = action.data.status;
      break;
    case ISFOCUSEDLASTNAME1:
      state.value1.lName.isTouched = true;
      state.value1.lName.isFocused = action.data.status;
    case ISFOCUSEDFIRSTNAME2:
      state.value2.fName.isTouched = true;
      state.value2.fName.isFocused = action.data.status;
      break;
    case ISFOCUSEDLASTNAME2:
      state.value2.lName.isTouched = true;
      state.value2.lName.isFocused = action.data.status;
      break;
    default:
      break;
  }
  return state;
}