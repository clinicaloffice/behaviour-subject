import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Subscription} from "rxjs";
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BabyComponent {
  subscription!: Subscription;

  constructor(public familyService: FamilyService, public cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.familyService.dirty.subscribe(() => {
      this.cdr.detectChanges();
      console.log('Baby');
    });
  }

  ngOnDestroy() {
    console.log('Baby destroyed');
    this.subscription.unsubscribe();
  }

}
