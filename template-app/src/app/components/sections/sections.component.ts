import { Section } from '../../data';
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MainSocialAndContactSectionComponent } from "./main-sections/main-social-and-contact-section/main-social-and-contact-section.component";
import { MainCenteredSectionComponent } from "./main-sections/main-centered-section/main-centered-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { ImageSectionComponent } from "./image-section/image-section.component";
import { GridSectionComponent } from "./grid-section/grid-section.component";
import { TextSectionComponent } from "./text-section/text-section.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";
import { ImageHeroSectionComponent } from './ux-sections/image-hero-section/image-hero-section.component';

@Component({
    selector: 'app-sections',
    standalone: true,
    templateUrl: './sections.component.html',
    styleUrl: './sections.component.scss',
    imports: [
      ContactSectionComponent,
      GridSectionComponent,
      ImageHeroSectionComponent,
      ImageSectionComponent,
      MainCenteredSectionComponent,
      MainSocialAndContactSectionComponent,
      NgFor,
      NgIf,
      OfferSectionComponent,
      TextSectionComponent,
    ]
})
export class SectionsComponent {
  @Input()
  sections: Section[] = [];

  readonly defaultClasses = "container mx-auto px-1 sm:px-4 md:px-6 lg:px-8";
}
