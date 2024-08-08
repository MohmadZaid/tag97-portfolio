import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'tag97-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  // currentSlide = 0;
  // aosEffect: string = 'fade-up';
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

}
