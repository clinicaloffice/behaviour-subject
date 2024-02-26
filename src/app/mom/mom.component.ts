import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FamilyService} from "../family.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MomComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor(public familyService: FamilyService, public cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
     this.subscription = this.familyService.dirty.subscribe(() => {
      console.log('Mom');
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    console.log('Mom destroyed');
    this.subscription.unsubscribe();
  }
}
