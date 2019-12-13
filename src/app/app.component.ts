import { Component } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { Observable } from "rxjs";

import { IAppState } from "./store/index";
import {
  SUBMITFORM1,
  SUBMITFORM2,
  ISFOCUSEDFIRSTNAME1,
  ISFOCUSEDLASTNAME1,
  ISFOCUSEDFIRSTNAME2,
  ISFOCUSEDLASTNAME2
} from "./actions/counter.actions";
let temp: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ReduxSample";
  @select("counter") public counter$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    var temp;
    this.counter$.subscribe(e => (temp = e));
    (this.fnameForm1 = temp.value1.fName.value), (this.lnameForm1 = temp.value1.lName.value),
    (this.fnameForm2 = temp.value2.fName.value), (this.lnameForm2 = temp.value2.lName.value);
  }
  fnameForm1: string;
  lnameForm1: string;
  fnameForm2: string;
  lnameForm2: string;
  submitForm1() {
    this.ngRedux.dispatch({
      type: SUBMITFORM1,
      data: { fName: this.fnameForm1, lName: this.lnameForm1 }
    });
  }
  submitForm2() {
    this.ngRedux.dispatch({
      type: SUBMITFORM2,
      data: { fName: this.fnameForm2, lName: this.lnameForm2 }
    });
  }
  isFocusedFirstNameInForm1(status: boolean) {
    this.ngRedux.dispatch({ type: ISFOCUSEDFIRSTNAME1, data: { status } });
  }
  isFocusedLastNameInForm1(status: boolean) {
    this.ngRedux.dispatch({ type: ISFOCUSEDLASTNAME1, data: { status } });
  }
  isFocusedFirstNameInForm2(status: boolean) {
    this.ngRedux.dispatch({ type: ISFOCUSEDFIRSTNAME2, data: { status } });
  }
  isFocusedLastNameInForm2(status: boolean) {
    this.ngRedux.dispatch({ type: ISFOCUSEDLASTNAME2, data: { status } });
  }
}
