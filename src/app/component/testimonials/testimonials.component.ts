import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { FirebaseCollection } from '../../../enum/firebase';
import { Testimonials } from '../../../modal/testimonials';
import { FirebaseService } from '../../../services/firebase.service';
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
export class TestimonialsComponent implements OnInit {
  private fbService = inject(FirebaseService);
  public testimonials!: Testimonials[];

  async ngOnInit(): Promise<void> {
    this.testimonials = await firstValueFrom(
      this.fbService.getAll<Testimonials>(FirebaseCollection.Testimonials)
    );
  }
}
