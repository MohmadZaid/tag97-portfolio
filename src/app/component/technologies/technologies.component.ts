import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechnologyCardComponent } from "./technology-card/technology-card.component";

@Component({
  selector: 'tag97-technologies',
  standalone: true,
  imports: [CommonModule, TechnologyCardComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  public openTab = 1;
  toggleTabs(tabNumber: number) {
    this.openTab = tabNumber;
  }
}
