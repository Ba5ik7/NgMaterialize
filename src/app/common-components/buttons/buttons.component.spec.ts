import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Have default buttonSubmit and can change', () => {
    expect(component.buttonSubmit).toBe(false, 'Link by default');
    component.buttonSubmit = true;
    expect(component.buttonSubmit).toBe(true, 'Has changed to Submit');
  })
});
