import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonloadComponent } from './skeletonload.component';

describe('SkeletonloadComponent', () => {
  let component: SkeletonloadComponent;
  let fixture: ComponentFixture<SkeletonloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
