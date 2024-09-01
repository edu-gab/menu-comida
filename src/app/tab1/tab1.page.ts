import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox,
  IonLabel, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
      name: 'Encebollado',
      ingredientes: 'Aceite vegetal, Cebolla morada, Tomate, Comino, Salsa de Ají, Agua, Cilantro, Albacora, Yuca, Pimiento verde, Pimiento rojo, Apio, Cubos de caldo de gallina, Diente de Ajo, Limón',
      img: 'https://i.pinimg.com/736x/3b/31/d4/3b31d452a97bbabb17f34875fd44d7fb.jpg',
      cantidad_ing: `1 Cucharada Aceite Vegetal 

1 1/2 Taza Cebolla Morada picada en tiras finas 

3 Tomates riñón maduros y picados en cuartos 

1/2 Cucharada Comino Molido 

2 Cucharaditas Ají para seco 

1 1/2 Litro Agua 

4 Cucharadas Cilantro fresco picado finamente 

1 libra de albacora fresca, en lomos 

2 Tazas Yuca cortada en cubos 

2/3 Taza Pimiento Rojo picado en pedazos grandes 

2/3 Taza Pimiento Verde Picado en pedazos grandes 

1/2 Taza Apio picado en pedazos grandes 

2 Cubos Caldo De Verduras Maggi® 

2 Dientes de ajo 

4 Unidades Limón cortado en cuartos `,
      recipe: `1.Coloca en una olla a hervir el agua, el aceite y añade 3 tomates y media cebolla paiteña picados, añade el apio los trozos de pimiento, 2 cucharadas de cilantro, ajos, comino, sal, pimienta y aji para seco.  

2.En otra olla aparte cocina la yuca picada previamente con bastante agua hasta que este suave. 

3.Por aparte realiza el encurtido de cebolla con el resto de cebolla paiteña picada finamente, lavada, escurrida y sazonada con sal, limon y cilantro restante picado. Deja reposar hasta que se curta. 

4.Añade en el caldo del paso 1 los lomos de albacora, cocínala completamente y retira de la olla una vez que estén bien cocidos, aproximadamente 10 minutos. 

5.Luego de reservada la albacora cocida, retira los vegetales del caldo y colócalos en una licuadora, añade un poco de yuca cocida y un poco de líquido de cocción de la yuca, procesalo hasta lograr un liquido homogeneo. Cierne el líquido procesado sobre el caldo de la olla y añade el agua de cocción de las yucas. Disuelve los cubos de Caldo de Verduras MAGGI®. Llevamos a ebullición durante 5 minutos a fuego medio. Regresamos la albacora a la preparación. 

6.Rectificamos los sabores con sal y pimienta. Coloca un poco de sopa con pedazos de yuca y albacora en el plato y sirve acompañado con un poco del curtido de cebolla que preparaste anteriormente. `
    },
    {
      name: 'Chaulafan',
      ingredientes: 'Arroz, Pollo, Arvejas, Aceite vegetal, Cebolla perla, Pimiento verde, Zanahoria, Cubos de caldo de gallina, Cilantro, Platano maduro',
      img: 'https://i.pinimg.com/236x/3f/a1/ff/3fa1ff58470d0f07b15f32fa2056931a.jpg',
      cantidad_ing: `3 Tazas Arroz 

2 Tazas Pollo desmechado 

1/2 Taza Arvejas cocidas 

1 Cucharada Aceite de achiote 

1/2 Taza Cebolla Perla cortada en tiras 

1/2 Taza Pimiento Verde cortado en tiras 

1/2 Taza Zanahoria cortada en cubos pequeños 

1 Cubo Caldo De Gallina Maggi® 

2 Cucharadas Cilantro finamente picado 

4 Porciones Plátano Maduro frito `,
      recipe: `1.Cocina el arroz en una olla con el Caldo de Gallina en Cubo MAGGI® y reserva. Del mismo modo, una vez frío, desmenuza la carne de pollo cocida y reserva. Haz lo mismo con las arvejas. Una vez que estén cocidos, tenlos listos para mezclar todo. 

Prepara el refrito 

2.Añade el aceite de achiote en una olla grande y una vez caliente, agrega la cebolla perla y el pimiento. Cocina durante 4 minutos. Luego, añade el pimiento picado y la zanahoria, y continúa cocinando. Sazona todo con el Caldo de Gallina en cubo MAGGI®. 

Mezcla todo 

3.Agrega el arroz cocido, el pollo desmenuzado y las arvejas cocidas en la olla con el refrito. Mezcla bien para incorporar todos los ingredientes. Deja que se caliente y sirve con rodajas de maduro frito como acompañamiento. 

 `
    },
    {
      name: 'Tortilla de huevo',
      ingredientes: 'Huevo, Leche evaporada, Sobre de caldo de gallina, Queso, Aceite vegetal',
      img: 'https://i.pinimg.com/236x/d9/03/8d/d9038d8bee836a3f7faf2376eec28056.jpg',
      cantidad_ing: `4 Unidades Huevo 

1 Sobre Caldo Criollita MAGGI® 

62 Mililitros Leche Evaporada LA LECHERA® 

90 gramos Queso Fresco 

15 Mililitros Aceite De Girasol `,
      recipe: `Prepara la mezcla 

1.Rompe los huevos y bátelos junto con CRIOLLITA MAGGI®, la Leche Evaporada LA LECHERA® y el queso fresco. 

Calienta el sartén 

2.Añade el aceite en un sartén y caliéntalo a fuego medio durante 3 minutos. Añade la mezcla y cocina a fuego medio bajo, sin remover, hasta que veas que la base está dorada. 

Sirve 

3.Añade un poco de sal y pimienta, voltea la tortilla y cocina unos minutos más. Una vez esté listo, retira del sartén, porciona en 4 y sirve inmediatamente. `
    },
    {
      name: 'Estofado de carne',
      ingredientes: 'Cebolla perla, Papa, Diente de Ajo, Carne de Res, Tomillo fresco, Laurel, Pasta de tomate, Vino tinto, Zanahoria, Aceite vegetal, Arvejas, Sal, Pimienta negra',
      img: 'https://i.ytimg.com/vi/39d9fGWD6V4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5XSo08vwKOORkqctNhG-P60cYHg',
      cantidad_ing: `1/2 Unidad Cebolla Perla cortada en cubitos 

2 unidades de papa grande picadas en cubos medianos 

4 dientes de ajo picado finamente 

3 Tazas De Carne De Res picada en cubos medianos 

Tomillo Fresco al gusto 

2 Hojas De Laurel 

1 Taza MAGGI® La Rojita Puré de Tomate 

1/2 Copa de Vino Tinto 

2 Unidades Zanahoria picada en cubos 

2 Unidades Caldo De Costilla Maggi® 

3 Cucharadas Aceite Vegetal 

1/2 Taza Arvejas precocidas en agua 

Sal y Pimienta al gusto `,
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
      ingredientes: 'Platano verde, Mantequilla, Cebolla larga, Sal prieta, Maní tostado, Leche semidescremada, Aceite vegetal, Cebolla morada, Tomate, Pimiento verde, Comino, Sobre de caldo de gallina, Albacora, Cilantro, Limón',
      img: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/cda13d770e8135d603f5d37d1080c00f.jpg',
      cantidad_ing: `5 Unidades Plátano Verde rallados finamente 

2 Cucharadas Aceite de achiote 

1 Cucharada Mantequilla Con Sal 

1/2 Taza Cebolla Morada picada finamente 

1 Unidad Tomate picado finamente 

1/2 Taza Cebolla Larga 

3/4 Taza Pimiento Verde picado finamente 

1 Cucharadita Comino Molido 

1/2 Sobre Caldo verduras en polvo MAGGI® 

1 Cucharadita Sal Prieta para acompañar 

1/2 Taza Maní tostado ligeramente 

1/4 Taza Leche Semidescremada LA LECHERA® 

1 Sobre Caldo Criollita MAGGI® 

1 Taza Pescado de preferencia dorado, filete de atún o albacora 

4 Cucharadas Cilantro picado 

1 servicio Limón `,
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
      ingredientes: 'Fideo tornillo, Atún, Mostaza, Pimienta negra, Cubos de caldo de gallina, Tomate, Apio, Cebolla morada, Pimiento verde, Mostaza, Sal, Pimienta negra, Cilantro, Mayonesa',
      img: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/455efba75ef22885a68be73037486250.png',
      cantidad_ing: `4 Tazas Fideo Tipo Tornillo 

1 Unidad Cubito de Caldo de Gallina MAGGI® 

2 Tazas Tomate picado finamente 

1 Taza Apio picado finamente 

2 Tazas Atún En Agua escurridos 

1 Taza Cebolla Morada picada en cubitos 

1 Taza Pimiento Verde picado en cubitos 

1 Taza Mayonesa con Limón MAGGI® 

1 Cucharada Mostaza MAGGI® 

1 Cucharadita Sal 

1 Cucharadita Pimienta Negra 

2 Cucharaditas Cilantro picado finamente `,
      recipe: `1.Cocina los fideos junto con 1 Caldo de Gallina en Cubo de 4 gramos MAGGI® hasta que estén suaves. Retíralos del fuego y enfríalos rápidamente en agua fría. Prepara un recipiente transparente y alto. 

2.Coloca en el recipiente, como primera capa, los fideos cocinados. Luego, cubre esta capa con los tomates. A continuación, añade el apio, el atún bien esparcido, la cebolla y el pimiento. 

3.En un recipiente aparte, añade Mayonesa con Limón Maggi® y Mostaza MAGGI®. Mezcla bien hasta obtener una mezcla uniforme y bien integrada. Si está muy espesa, puedes añadir un chorrito de agua. Agrega el cilantro picado y rectifica la sazón con sal y pimienta al gusto. Cubre la ensalada con el aderezo justo antes de servir, mezcla todos los ingredientes y sirve inmediatamente. `
    },
    {
      name: 'Fritada',
      ingredientes: 'Carne de cerdo, Diente de Ajo, La sazón, Agua, Sobre de caldo de gallina, Aceite vegetal, Mote, Papa chaucha, Platano maduro, Tomate, Cebolla morada, Limón, Cilantro',
      img: 'https://www.aki.com.ec/wp-content/uploads/2021/01/fritada_criolla.jpg',
      cantidad_ing: `2 Libras Carne De Cerdo cortada en cubos grandes 

2 Unidades Ajo picados finamente 

2 Cucharadas Adobo La Sazón Maggi® 

4 Tazas Agua 

1 Sobre Caldo de Gallina en polvo MAGGI ® 

4 Cucharadas Aceite Vegetal Girasol 

4 Tazas Mote Cocido 

4 Tazas Papas Chauchas lavadas y cocinadas 

1 Unidad Plátano Maduro frito 

1 Unidad Tomate picado en cubos pequeños 

1/2 Unidad Cebolla Morada picada en tiras delgadas 

2 Unidades Limón su jugo 

2 Cucharadas Cilantro picado finamente `,
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

  constructor(private router: Router,
              private navCtrl: NavController,
              ) {}

  goBack() {
    this.navCtrl.back();
  }

  goToDishRecipe(dish: any){
    this.router.navigate(['dish-details'], {
      queryParams: {
        dish: JSON.stringify(dish)
      }
    })
  }
}