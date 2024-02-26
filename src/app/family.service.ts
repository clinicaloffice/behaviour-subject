import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  public dirty = new BehaviorSubject(0);
  public numVal = 0;

  constructor() { }

  public updateAll(): void {
    this.dirty.next(this.dirty.getValue()+1);
  }
}
