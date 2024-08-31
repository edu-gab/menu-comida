import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonCard, IonCardTitle, IonItem, IonLabel} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.page.html',
  styleUrls: ['./dish-details.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonItem, IonLabel]
})
export class DishDetailsPage implements OnInit {

  dish: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        if(params && params['dish']){
          this.dish = JSON.parse(params['dish']);
        }
      });
  }

}
