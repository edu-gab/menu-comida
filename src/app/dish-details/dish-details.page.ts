import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonCard, IonCardTitle, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.page.html',
  styleUrls: ['./dish-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonItem, IonLabel]
})
export class DishDetailsPage implements OnInit {

  dish: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController,) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        if(params && params['dish']){
          this.dish = JSON.parse(params['dish']);
        }
      });
  }

}
