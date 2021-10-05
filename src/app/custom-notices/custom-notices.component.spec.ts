import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNoticesComponent } from './custom-notices.component';

describe('CustomNoticesComponent', () => {
  let component: CustomNoticesComponent;
  let fixture: ComponentFixture<CustomNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
