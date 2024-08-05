import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProcessSectionComponent } from './our-process-section.component';

describe('OurProcessSectionComponent', () => {
  let component: OurProcessSectionComponent;
  let fixture: ComponentFixture<OurProcessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProcessSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProcessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
