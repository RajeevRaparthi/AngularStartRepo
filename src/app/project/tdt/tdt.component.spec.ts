import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdtComponent } from './tdt.component';

describe('TdtComponent', () => {
  let component: TdtComponent;
  let fixture: ComponentFixture<TdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
