import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from './store/index';
import { SUBMIT ,ISFOCUSEDFIRSTNAME,ISFOCUSEDLASTNAME} from './actions/counter.actions';
let temp:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReduxSample';
  @select('counter')  public counter$: Observable<any>;
  
  constructor(private ngRedux: NgRedux<IAppState>) { }
  
  ngOnInit(){
    var temp;
    this.counter$.subscribe(e=>temp=e)
    this.fname=temp.value1.value,
    this.lname=temp.value1.value
  }
  fname:string;
  lname:string;
  submit(){
    this.ngRedux.dispatch({ type: SUBMIT,data:{ fName:this.fname,lName:this.lname}});
  }
  isFocusedFirstName(){
    this.ngRedux.dispatch({type:ISFOCUSEDFIRSTNAME,data:{}})
  }
  isFocusedLastName()
  {
    this.ngRedux.dispatch({type:ISFOCUSEDLASTNAME,data:{}})

  }
  
}