import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndTaskComponent } from './front-end-task.component';

describe('FrontEndTaskComponent', () => {
  let component: FrontEndTaskComponent;
  let fixture: ComponentFixture<FrontEndTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
