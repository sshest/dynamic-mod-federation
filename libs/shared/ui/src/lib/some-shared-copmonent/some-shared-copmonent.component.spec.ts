import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeSharedCopmonentComponent } from './some-shared-copmonent.component';

describe('SomeSharedCopmonentComponent', () => {
  let component: SomeSharedCopmonentComponent;
  let fixture: ComponentFixture<SomeSharedCopmonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomeSharedCopmonentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SomeSharedCopmonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
