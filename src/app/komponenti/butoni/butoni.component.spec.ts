import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButoniComponent } from './butoni.component';

describe('ButoniComponent', () => {
  let component: ButoniComponent;
  let fixture: ComponentFixture<ButoniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButoniComponent]
    });
    fixture = TestBed.createComponent(ButoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
