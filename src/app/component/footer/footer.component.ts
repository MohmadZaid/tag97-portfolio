import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tag97-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public todayDate = new Date();
}
