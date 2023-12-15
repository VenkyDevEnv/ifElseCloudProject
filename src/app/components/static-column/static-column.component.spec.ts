import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticColumnComponent } from './static-column.component';

describe('StaticColumnComponent', () => {
  let component: StaticColumnComponent;
  let fixture: ComponentFixture<StaticColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticColumnComponent]
    });
    fixture = TestBed.createComponent(StaticColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
