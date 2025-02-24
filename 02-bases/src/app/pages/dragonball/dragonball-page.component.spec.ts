import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballPageComponentComponent } from './dragonball-page.component';

describe('DragonballPageComponentComponent', () => {
  let component: DragonballPageComponentComponent;
  let fixture: ComponentFixture<DragonballPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragonballPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
