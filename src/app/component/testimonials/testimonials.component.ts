import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tag97-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  currentSlide = 0;
  aosEffect: string = 'fade-up';
  testimonials = [
    {
      msg: 'I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future. ',
      name: 'name1',
      company: 'comp1',
    },
    {
      msg: 'description description description description description description description description description description description ',
      name: 'name2',
      company: 'comp2',
    },
    {
      msg: 'I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future. ',
      name: 'name3',
      company: 'comp3',
    },
    {
      msg: 'msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 msg4 ',
      name: 'name4',
      company: 'comp4',
    },
  ];

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide = this.currentSlide - 1;
      this.aosEffect = 'fade-right';
    }
  }

  next() {
    if (this.currentSlide < this.testimonials.length - 1) {
      this.currentSlide = this.currentSlide + 1;
      this.aosEffect = 'fade-left';
    }
  }
}
