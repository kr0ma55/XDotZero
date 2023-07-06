import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContattiComponent } from './pagina-contatti.component';

describe('PaginaContattiComponent', () => {
  let component: PaginaContattiComponent;
  let fixture: ComponentFixture<PaginaContattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaContattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
