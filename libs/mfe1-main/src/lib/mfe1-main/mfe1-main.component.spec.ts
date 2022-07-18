import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1MainComponent } from './mfe1-main.component';

describe('Mfe1MainComponent', () => {
  let component: Mfe1MainComponent;
  let fixture: ComponentFixture<Mfe1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe1MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mfe1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
