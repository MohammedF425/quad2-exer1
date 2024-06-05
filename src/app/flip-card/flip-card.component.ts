import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  animations: [
    trigger('flipState', [
      state('first', style({
        transform: 'rotateY(0)'
      })),
      state('second', style({
        transform: 'rotateY(180deg)'
      })),
      transition('first => second', animate('0.6s')),
      transition('second => first', animate('0.6s'))
    ])
  ]
})
export class FlipCardComponent {
  index1 = 0;
  index2 = 1;
  flip: string = 'first';
  isFlipping: boolean = false;
  images = [
    '/assets/img/Phone-Jotto-Scan 1.png',
    '/assets/img/Phone-Jotto-Insights 1.png',
    '/assets/img/Phone-Jotto-Feedback 1.png'
  ];
  captions = [
    'Scan',
    'Insights',
    'Feedback'
  ]

  toggleFlip() {
    if (!this.isFlipping) {
      this.isFlipping = true;
      if (this.flip === 'first') {
        this.flip = 'second';
        // this.index1 = (this.index1 + 1) % 3;
      } else {
        this.flip = 'first';
        // this.index2 = (this.index2 + 1) % 3;
      }
    }
  }
  

  onFlipStart(event: AnimationEvent) {
    if (event.fromState === 'first' && event.toState === 'second') {
      this.isFlipping = true;
    }
  }

  onFlipDone(event: AnimationEvent) {
    if (event.fromState === 'first' && event.toState === 'second') {
      this.index1 = (this.index1 + 2) % 3;
    } else if (event.fromState === 'second' && event.toState === 'first') {
      this.index2 = (this.index2 + 2) % 3;
    }
    this.isFlipping = false;
  }
}
