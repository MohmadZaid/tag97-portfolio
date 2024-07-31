import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FirebaseCollection } from '../../../enum/firebase';
import { FirebaseService } from '../../../services/firebase.service';
@Component({
  selector: 'tag97-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  public visitorForm!: FormGroup;

  private firebaseservice = inject(FirebaseService);
  private fb = inject(FormBuilder);
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
        console.log(this.visitorForm.value);
        this.firebaseservice.add(
          FirebaseCollection.Visitors,
          this.visitorForm.value
        );
        this.visitorForm.reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('not Valid');
    }
  }
}
