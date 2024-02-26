import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBornComponent } from './first-born.component';

describe('FirstBornComponent', () => {
  let component: FirstBornComponent;
  let fixture: ComponentFixture<FirstBornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstBornComponent]
    });
    fixture = TestBed.createComponent(FirstBornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
