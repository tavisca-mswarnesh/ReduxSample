import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from './store/index';
import { INCREMENT1, DECREMENT1, INCREMENT2, DECREMENT2 } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReduxSample';
  @select('counter') public counter$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  decrement1() {
    this.ngRedux.dispatch({ type: DECREMENT1 });
  }

  increment1() {
    this.ngRedux.dispatch({ type: INCREMENT1 });
  }
  decrement2() {
    this.ngRedux.dispatch({ type: DECREMENT2 });
  }

  increment2() {
    this.ngRedux.dispatch({ type: INCREMENT2 });
  }
}
