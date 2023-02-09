import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterExitService {
  constructor() {}

  canDeactivate(type: boolean): boolean {
    return type ? true : false;
  }
}
