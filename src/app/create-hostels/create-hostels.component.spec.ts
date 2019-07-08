import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHostelsComponent } from './create-hostels.component';

describe('CreateHostelsComponent', () => {
  let component: CreateHostelsComponent;
  let fixture: ComponentFixture<CreateHostelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHostelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
