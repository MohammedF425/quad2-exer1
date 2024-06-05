import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'animate.css';


@Component({
  selector: 'app-image-rotator',
  templateUrl: './image-rotator.component.html',
  styleUrls: ['./image-rotator.component.css'],
  standalone: true,
  // animations: [
  //   trigger('flipAnimation', [
  //     state('front', style({ transform: 'rotateY(0deg)' })),
  //     state('back', style({ transform: 'rotateY(180deg)' })),
  //     transition('front <=> back', animate('0.5s ease-in-out')) // Adjust animation duration
  //   ])
  // ]
})
export class ImageRotatorComponent {
  images = [
    '/assets/img/Phone-Jotto-Scan 1.png',
    '/assets/img/Phone-Jotto-Insights 1.png',
    '/assets/img/Phone-Jotto-Feedback 1.png'
  ];
  captions = [
    'image1',
    'image2',
    'image3'
  ]
  caption = 'image1'
  currentImageIndex = 0;
  // flipState: 'front' | 'back' = 'front'; // Initial state
  showDiv1: boolean = true;
  showDiv2: boolean = false;
  showDiv3: boolean = false;
  toggleDivs() {
    if (this.showDiv1) {
      this.showDiv1 = false;
      this.showDiv2 = true;
    } else if (this.showDiv2) {
      this.showDiv2 = false;
      this.showDiv3 = true;
    } else {
      this.showDiv3 = false;
      this.showDiv1 = true;
    }
  }
  rotateImage() {
    // this.flipState = 'back'; // Start flip animation
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Change to next image
      this.caption = this.captions[this.currentImageIndex]

      // this.flipState = 'front'; // Reset flip state for next animation
    }, 500); // Adjust delay if needed
    
  }
}
