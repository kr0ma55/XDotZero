import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutoComponent } from './saluto.component';

describe('SalutoComponent', () => {
  let component: SalutoComponent;
  let fixture: ComponentFixture<SalutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
