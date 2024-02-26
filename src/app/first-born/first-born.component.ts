import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Subscription} from "rxjs";
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-first-born',
  templateUrl: './first-born.component.html',
  styleUrls: ['./first-born.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstBornComponent {
  subscription!: Subscription;

  constructor(public familyService: FamilyService, public cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.familyService.dirty.subscribe(() => {
      console.log('First Born');
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    console.log('First Born destroyed');
    this.subscription.unsubscribe();
  }
}
