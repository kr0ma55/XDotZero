import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFotoEventiComponent } from './pagina-foto-eventi.component';

describe('PaginaFotoEventiComponent', () => {
  let component: PaginaFotoEventiComponent;
  let fixture: ComponentFixture<PaginaFotoEventiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaFotoEventiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFotoEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
