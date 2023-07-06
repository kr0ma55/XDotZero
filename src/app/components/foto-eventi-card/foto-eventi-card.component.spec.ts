import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEventiCardComponent } from './foto-eventi-card.component';

describe('FotoEventiCardComponent', () => {
  let component: FotoEventiCardComponent;
  let fixture: ComponentFixture<FotoEventiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoEventiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoEventiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
