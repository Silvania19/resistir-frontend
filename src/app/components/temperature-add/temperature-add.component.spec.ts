import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureAddComponent } from './temperature-add.component';

describe('TemperatureAddComponent', () => {
  let component: TemperatureAddComponent;
  let fixture: ComponentFixture<TemperatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
