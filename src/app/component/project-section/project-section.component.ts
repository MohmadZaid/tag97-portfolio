import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseCollection } from '../../../enum/firebase';
import { FirebaseService } from '../../../services/firebase.service';

interface project {
  id?: string;
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'tag97-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  private fbService = inject(FirebaseService);
  public projects!: Observable<project[]>;
  ngOnInit(): void {
    this.projects = this.fbService.getAll<project>(FirebaseCollection.Projects);
  }
}
