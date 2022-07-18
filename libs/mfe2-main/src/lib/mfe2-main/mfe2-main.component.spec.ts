import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2MainComponent } from './mfe2-main.component';

describe('Mfe2MainComponent', () => {
  let component: Mfe2MainComponent;
  let fixture: ComponentFixture<Mfe2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe2MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mfe2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
