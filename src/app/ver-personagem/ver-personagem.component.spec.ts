import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPersonagemComponent } from './ver-personagem.component';

describe('VerPersonagemComponent', () => {
  let component: VerPersonagemComponent;
  let fixture: ComponentFixture<VerPersonagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPersonagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
