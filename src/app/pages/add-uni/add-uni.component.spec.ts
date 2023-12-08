import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniComponent } from './add-uni.component';

describe('AddUniComponent', () => {
  let component: AddUniComponent;
  let fixture: ComponentFixture<AddUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
