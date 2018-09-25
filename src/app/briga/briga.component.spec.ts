import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigaComponent } from './briga.component';

describe('BrigaComponent', () => {
  let component: BrigaComponent;
  let fixture: ComponentFixture<BrigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
