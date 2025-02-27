import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballSuperPageComponentComponent } from './dragonball-super-page.component';

describe('DragonballPageComponentComponent', () => {
  let component: DragonballSuperPageComponentComponent;
  let fixture: ComponentFixture<DragonballSuperPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragonballSuperPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballSuperPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
