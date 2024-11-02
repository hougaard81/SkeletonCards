import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SkeletonloadComponent } from './components/skeletonload/skeletonload.component';

interface Post {
  id: number;
  author: string;
  gptModel: string;
  category: string;
  language: string;
  prompt: string;
  voteScore: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    MatCardModule, 
    MatIconModule,
    SkeletonloadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = true;
  posts: Post[] = [];

  ngOnInit() {
    // Simulate API call
    this.loadPosts();
  }

  loadPosts() {
    // Simulate network delay
    setTimeout(() => {
      this.posts = [
        {
          id: 1,
          author: 'John Doe',
          gptModel: 'GPT-4',
          category: 'Writing',
          language: 'English',
          prompt: 'Create a detailed outline for a science fiction novel set in the year 2150.',
          voteScore: 42
        },
        {
          id: 2,
          author: 'Jane Smith',
          gptModel: 'Claude',
          category: 'Code',
          language: 'Python',
          prompt: 'Write a Python script that analyzes sentiment in social media posts.',
          voteScore: 35
        },
        {
          id: 3,
          author: 'Alex Johnson',
          gptModel: 'GPT-3',
          category: 'Analysis',
          language: 'English',
          prompt: 'Analyze the potential impact of AI on healthcare in the next decade.',
          voteScore: 28
        }
      ];
      this.isLoading = false;
    }, 2000); // 2 second delay to show skeleton
  }
}