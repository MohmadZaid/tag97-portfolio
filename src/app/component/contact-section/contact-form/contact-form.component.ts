import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FirebaseCollection } from '../../../../enum/firebase';
import { FirebaseService } from '../../../../services/firebase.service';
import { ToasterComponent } from '../../toaster/toaster.component';

@Component({
  selector: 'tag97-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToasterComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  @Output() statusEvent = new EventEmitter<string>();
  public visitorForm!: FormGroup;
  private firebaseservice = inject(FirebaseService);
  private fb = inject(FormBuilder);
  public showToaster = true;
  public toasterStatus = '';
  ngOnInit(): void {
    this.visitorForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.visitorForm.get(controlName);
    return control?.touched && control.invalid ? true : false;
  }

  submitInquirie() {
    if (this.visitorForm.valid) {
      try {
        this.firebaseservice.add(
          FirebaseCollection.Visitors,
          this.visitorForm.value
        );
        this.statusEvent.emit('success');
        this.visitorForm.reset();
      } catch (error) {
        this.statusEvent.emit('failed');
        console.log(error);
      }
    } else {
      this.statusEvent.emit('failed');
    }
  }
}
