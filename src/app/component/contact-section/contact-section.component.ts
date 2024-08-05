import { Component, EventEmitter, Output } from '@angular/core';
import { ToasterComponent } from '../toaster/toaster.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'tag97-contact-section',
  standalone: true,
  imports: [ContactFormComponent, ToasterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  @Output() sendEventofStatus = new EventEmitter<string>();

  handleStatusEvent(event: string) {
    this.sendEventofStatus.emit(event);
  }
}
