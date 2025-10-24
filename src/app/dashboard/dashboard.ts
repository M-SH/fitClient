import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../services/auth-google.service';
import { FileUploaderComponent } from "../upload/uploader";

const MODULES = [CommonModule, FileUploaderComponent];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MODULES],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {
  private authService = inject(AuthGoogleService);
  private router = inject(Router);

  profile = this.authService.profile;

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}