import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox,
  IonLabel, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox,
  IonLabel, IonCol, IonRow, CommonModule]
})
export class Tab1Page {
  recommendedDishes = [
    {
      name: 'Chaulafan',
      img: 'https://i.pinimg.com/236x/3f/a1/ff/3fa1ff58470d0f07b15f32fa2056931a.jpg',
      recipe: "prueba"
    },
    {
      name: 'Tortilla de huevo',
      img: 'https://i.pinimg.com/236x/d9/03/8d/d9038d8bee836a3f7faf2376eec28056.jpg',
      recipe: `Prepara la mezcla 

1.Rompe los huevos y bátelos junto con CRIOLLITA MAGGI®, la Leche Evaporada LA LECHERA® y el queso fresco. 

Calienta el sartén 

2.Añade el aceite en un sartén y caliéntalo a fuego medio durante 3 minutos. Añade la mezcla y cocina a fuego medio bajo, sin remover, hasta que veas que la base está dorada. 

Sirve 

3.Añade un poco de sal y pimienta, voltea la tortilla y cocina unos minutos más. Una vez esté listo, retira del sartén, porciona en 4 y sirve inmediatamente. `
    },
    {
      name: 'Estofado de carne',
      img: 'https://i.ytimg.com/vi/39d9fGWD6V4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5XSo08vwKOORkqctNhG-P60cYHg',
      recipe: `En el sartén 

1.Coloca el aceite en un sartén amplio, una vez caliente coloca y sella la carne. Retira del sartén y reserva. 

Dora 

2.En el mismo sartén coloca: Cebolla, ajo, tomillo y laurel deja que las cebollas y los ajos se cocinen y las especias suelten su sabor. Coloca la pasta de tomate y la ½ copa de vino tinto mezcla hasta que todo se despegue del fondo de la olla. Añade el Caldo de Costilla MAGGI® preparado y cocina durante 10 minutos. 

Agrega 

3.Agrega las zanahorias, papas y la carne reservada y cocina por 20 minutos. Cocina a fuego medio haciendo la que salsa hierva suavemente, Añade las arvejas y cocina hasta que estén listas y la salsa espesa. 

Sirve 

4.Acompaña con arroz, maduros fritos y aguacate. `
    },
    {
      name: 'Cazuela de pescado',
      img: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/cda13d770e8135d603f5d37d1080c00f.jpg',
      recipe: `Prepara el refrito: 

1.Coloca el aceite de achiote junto con la mantequilla en una sartén amplia y, una vez caliente, añade la cebolla paiteña, el tomate, cebolla larga, pimiento y comino. Cocina hasta que todo esté cocido y el refrito formado. Separa la preparación en 2 partes. 

Prepara la masa: 

2.Ralla el verde finamente y añádelo inmediatamente a la sartén con una parte del refrito, agrega también 1/2 sobre de Caldo de verduras MAGGI® , revuelve bien y cocina ligueramente a fuego bajo. Aparte, licua el maní tostado con la leche semidescremada LA LECHERA® y el caldo en polvo CRIOLLITA MAGGI®. Añade esta mezcla a la sartén, sube el fuego a medio y cocina hasta que espese. 

Arma la cazuela: 

3.Coloca un poco de la masa cocida en el fondo de una cazuela de barro. Sobre esta coloca una porción de pescado y sazónalo con sal y pimienta. Por último, cúbrelo con un poco del refrito sobrante y coloca sobre las cazuelas más masa de verde preparada. 

Cocínalas: 

4.Cocina las cazuelas en un horno precalentado a 250°C durante 10 a 12 minutos o hasta que la cazuela se seque un poco en la parte superior. Acompaña con salprieta sobre la cazuela y jugo de limón recién exprimido. 

 `
    },
    {
      name: 'Ensalada de fideo con atun',
      img: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/455efba75ef22885a68be73037486250.png',
      recipe: `1.Cocina los fideos junto con 1 Caldo de Gallina en Cubo de 4 gramos MAGGI® hasta que estén suaves. Retíralos del fuego y enfríalos rápidamente en agua fría. Prepara un recipiente transparente y alto. 

2.Coloca en el recipiente, como primera capa, los fideos cocinados. Luego, cubre esta capa con los tomates. A continuación, añade el apio, el atún bien esparcido, la cebolla y el pimiento. 

3.En un recipiente aparte, añade Mayonesa con Limón Maggi® y Mostaza MAGGI®. Mezcla bien hasta obtener una mezcla uniforme y bien integrada. Si está muy espesa, puedes añadir un chorrito de agua. Agrega el cilantro picado y rectifica la sazón con sal y pimienta al gusto. Cubre la ensalada con el aderezo justo antes de servir, mezcla todos los ingredientes y sirve inmediatamente. `
    },
    {
      name: 'Fritada',
      img: 'https://www.aki.com.ec/wp-content/uploads/2021/01/fritada_criolla.jpg',
      recipe: `Prepara la carne 

1.Coloca la carne en un recipiente y sazónala con ajo picado, Adobo LA SAZÓN MAGGI® y medio sobre de Caldo de Gallina en Polvo MAGGI®. Mezcla bien y reserva. 

Cocina la carne 

2.En una olla, calienta agua. Una vez que esté caliente, agrega medio sobre de Caldo de Gallina en Polvo MAGGI® y lleva a hervir a fuego medio. Cuando esté hirviendo, añade la carne de cerdo sazonada y cocina hasta que el agua se haya evaporado por completo. 

Dora la carne 

3.Una vez que el agua se haya evaporado, añade aceite a la olla y continúa cocinando hasta que la carne esté dorada. Retira la carne de la olla y colócala sobre papel absorbente para quitar el exceso de grasa. 

Arma el plato final 

4.Coloca una porción de carne de cerdo junto con una porción de mote cocido, papas chauchas, un plátano maduro frito y un encurtido. ¡Disfrútalo! `
    }
  ];

  constructor(private router: Router) {}

  goToDishRecipe(dish: any){
    this.router.navigate(['dish-details'], {
      queryParams: {
        dish: JSON.stringify(dish)
      }
    })
  }
}