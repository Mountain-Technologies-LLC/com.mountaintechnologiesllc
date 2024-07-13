import { Component, Inject, Input } from '@angular/core';
import { ImageHeroSection } from '../../../../data';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-image-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './image-hero-section.component.html',
  styleUrl: './image-hero-section.component.scss'
})
export class ImageHeroSectionComponent {
  constructor (@Inject(APP_BASE_HREF) public baseHref: string) { }

  @Input()
  imageHeroSection!: ImageHeroSection;
}
