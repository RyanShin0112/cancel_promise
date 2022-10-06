import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public rejectPromise;

  public fetchPromise(){
    console.log('PROMISE FETCHED: Please wait for 7 secs');
    this.doWait();
  }

  public doPromise = () => {
    const promiseFunction = new Promise((resolve, reject) => {
      this.rejectPromise = reject;
      setTimeout(() => {
        resolve('RESULT: OKAY');
      }, 7000);
    }).catch((error) => {
      console.log('PROMISE CANCLED');
    });
    return promiseFunction;
  };

  public doWait = async () => {
    const promiseFunction = this.doPromise();
    const promiseReturn = await promiseFunction;
    console.log(promiseReturn);
  };
}
