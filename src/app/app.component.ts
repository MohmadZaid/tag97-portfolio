import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { Observable } from 'rxjs';
import { FirebaseCollection } from '../enum/firebase';
import { FirebaseService } from '../services/firebase.service';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { CustomCursorComponent } from './component/custom-cursor/custom-cursor.component';
import { FeatureCardComponent } from './component/feature-card/feature-card.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { ToasterComponent } from './component/toaster/toaster.component';
import { LoaderComponent } from "./component/loader/loader.component";
import { TestimonialsComponent } from "./component/testimonials/testimonials.component";
interface project {
  id?: string;
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FeatureCardComponent,
    RouterLink,
    ServiceCardComponent,
    ContactFormComponent,
    FormsModule,
    CustomCursorComponent,
    ToasterComponent,
    LoaderComponent,
    TestimonialsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private fbService = inject(FirebaseService);
  public darkTheme = true;
  public showToaster = false;
  public toasterStatus = '';

  public loader = false;

  public projects!: Observable<project[]>;
  ngOnInit() {
    AOS.init();
    this.projects = this.fbService.getAll<project>(FirebaseCollection.Projects);
  }

  @ViewChild('HeaderComponent') header!: HeaderComponent;

  navigate(link: string) {
    this.header.navigateAndClose(link);
  }
  statusChange(event: string) {
    this.toasterStatus = event;
    this.showToaster = true;
    setTimeout(() => {
      this.showToaster = false;
    }, 2000);
  }
}
