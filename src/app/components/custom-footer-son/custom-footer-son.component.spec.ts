import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFooterSonComponent } from './custom-footer-son.component';

describe('CustomFooterSonComponent', () => {
  let component: CustomFooterSonComponent;
  let fixture: ComponentFixture<CustomFooterSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFooterSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFooterSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
