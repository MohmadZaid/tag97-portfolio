import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { CustomCursorComponent } from './component/custom-cursor/custom-cursor.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { ToasterComponent } from './component/toaster/toaster.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    CustomCursorComponent,
    ToasterComponent,
    LoaderComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isScrolled = false;
  public darkTheme = true;
  public loader = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 250;
  }
  ngOnInit() {
    this.darkTheme =
      localStorage.getItem('tag97_darkTheme') == 'true' ? true : false;
    AOS.init();
  }
  themeChange() {
    localStorage.setItem('tag97_darkTheme', this.darkTheme.toString());
  }
  scrolltoTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
