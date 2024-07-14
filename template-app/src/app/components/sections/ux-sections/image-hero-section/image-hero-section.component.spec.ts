import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHeroSectionComponent } from './image-hero-section.component';

describe('ImageHeroSectionComponent', () => {
  let component: ImageHeroSectionComponent;
  let fixture: ComponentFixture<ImageHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
