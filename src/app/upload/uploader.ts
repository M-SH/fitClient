import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploader.html',
  styleUrl: './uploader.css'
})

export class FileUploaderComponent {
  selectedFile?: File;
  isUploading = false;
  uploadMessage = '';

  // Inject HttpClient
  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.uploadMessage = '';
    }
  }

  uploadFile() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    const formData = new FormData();
    formData.append('-F', this.selectedFile);

    // Change API endpoint here
    this.http.post('https://localhost:3000/upload', formData)
      .subscribe({
        next: () => {
          this.uploadMessage = 'Upload successful!';
          this.isUploading = false;
        },
        error: () => {
          this.uploadMessage = 'Upload failed.';
          this.isUploading = false;
        }
      });
  }
}
