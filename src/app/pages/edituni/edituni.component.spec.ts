import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituniComponent } from './edituni.component';

describe('EdituniComponent', () => {
  let component: EdituniComponent;
  let fixture: ComponentFixture<EdituniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
