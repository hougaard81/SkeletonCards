import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skeletonload',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './skeletonload.component.html',
  styleUrl: './skeletonload.component.scss'
})
export class SkeletonloadComponent {
  @Input() count: number = 3;
  skeletonArray = Array(3);

  ngOnInit() {
    this.skeletonArray = Array(this.count);
  }

}
