import { Component,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonRow, IonCol,
  IonLabel, IonItem,IonCheckbox
 } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonListHeader} from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, 
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid,
     IonRow, IonCol ,IonList, IonListHeader,IonLabel, IonItem,IonCheckbox],
})
export class Tab1Page implements AfterViewInit{

  @ViewChild('animatedIcon', { read: ElementRef }) animatedIcon: ElementRef;

  public favStateOn = false;
  public favOnAnimation: Animation;
  public favOffAnimation: Animation;

  constructor() {}

  ngAfterViewInit() {
    this.favOnAnimation = createAnimation('')
    .addElement(this.animatedIcon.nativeElement)
    .duration(500)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(1.8)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);

    this.favOffAnimation = createAnimation('')
    .addElement(this.animatedIcon.nativeElement)
    .duration(500)
    .keyframes([
      { offset: 0, transform: 'scale(0.8)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  }

  animate(): void {
    if (this.favStateOn) {
      this.favOnAnimation.stop();
      this.favOffAnimation.play();
    } else {
      this.favOffAnimation.stop();
      this.favOnAnimation.play();
    }
    this.favStateOn = !this.favStateOn;
  }
}
