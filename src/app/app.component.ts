import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { CustomCursorComponent } from './component/custom-cursor/custom-cursor.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from "./component/loader/loader.component";
import { ToasterComponent } from './component/toaster/toaster.component';
import { HomeComponent } from "./home/home.component";


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
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  public darkTheme = true;
  public loader = false;

  ngOnInit() {
    AOS.init();
  }

  // @ViewChild('HeaderComponent') header!: HeaderComponent;

  // navigate(link: string) {
  //   this.header.navigateAndClose(link);
  // }
  
 
}
