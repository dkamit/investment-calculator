import { ErrorHandler , Component } from '@angular/core'


export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
      console.log(error);
  }
}