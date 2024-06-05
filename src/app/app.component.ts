import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card/flip-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FlipCardComponent], // Import the component here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exer1';
    // Define the images
    image1 = 'assets/img/image1.png';
    image2 = 'assets/img/image2.png';
    
    // Set the initial image
    currentImage = this.image1;
  
    // Method to rotate the image
    rotateImage() {
      this.currentImage = this.currentImage === this.image1 ? this.image2 : this.image1;
    }
}
