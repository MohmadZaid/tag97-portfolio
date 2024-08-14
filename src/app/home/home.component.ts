import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutSectionComponent } from '../component/about-section/about-section.component';
import { BlogSectionComponent } from '../component/blog-section/blog-section.component';
import { ContactFormComponent } from '../component/contact-section/contact-form/contact-form.component';
import { ContactSectionComponent } from '../component/contact-section/contact-section.component';
import { FeatureCardComponent } from '../component/feature-section/feature-card/feature-card.component';
import { FeatureSectionComponent } from '../component/feature-section/feature-section.component';
import { HeroSectionComponent } from '../component/hero-section/hero-section.component';
import { OurProcessSectionComponent } from '../component/our-process-section/our-process-section.component';
import { ProjectSectionComponent } from '../component/project-section/project-section.component';
import { ServiceCardComponent } from '../component/service-section/service-card/service-card.component';
import { ServiceSectionComponent } from '../component/service-section/service-section.component';
import { TestimonialsComponent } from '../component/testimonials/testimonials.component';
import { ToasterComponent } from '../component/toaster/toaster.component';
import { TechnologiesComponent } from "../component/technologies/technologies.component";
@Component({
  selector: 'tag97-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent,
    TestimonialsComponent,
    ServiceCardComponent,
    FeatureCardComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    AboutSectionComponent,
    ProjectSectionComponent,
    OurProcessSectionComponent,
    ContactSectionComponent,
    ServiceSectionComponent,
    ToasterComponent,
    BlogSectionComponent,
    TechnologiesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showToaster = false;
  toasterStatus = 'success';

  statusEvent(event: string) {
    this.showToaster = true;
    this.toasterStatus = event;
    setTimeout(() => {
      this.showToaster = false;
    }, 2000);
  }
}
