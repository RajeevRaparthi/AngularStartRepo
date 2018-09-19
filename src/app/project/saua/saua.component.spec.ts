import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauaComponent } from './saua.component';

describe('SauaComponent', () => {
  let component: SauaComponent;
  let fixture: ComponentFixture<SauaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
