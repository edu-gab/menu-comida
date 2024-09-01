import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox,
  IonLabel, IonCol, IonRow, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox,
  IonLabel, IonCol, IonRow, FormsModule, CommonModule]
})
export class Tab2Page {
  ingredients = [
    { name: 'Aceite vegetal', img:'https://manuartestore.com/ecuador/wp-content/uploads/2021/12/istock-576732962.jpg', selected: false },
    { name: 'Cebolla morada', img:'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/01/24/63d057f760eb7.jpeg', selected: false },
    { name: 'Tomate', img:'https://www.hola.com/horizon/landscape/ec0d025fe8bc-tomate-t.jpg', selected: false },
    { name: 'Comino', img:'https://buenazo.cronosmedia.glr.pe/original/2022/02/21/6213fb42655ab87daf1fd34d.jpg', selected: false },
    { name: 'Salsa de Ají', img:'https://gruporiental.com/shop/wp-content/uploads/2018/11/salsa-de-aji-oriental-200ml.png', selected: false },
    { name: 'Agua', img:'https://bebbia.com/blog/wp-content/uploads/2023/02/Calidad-del-agua.png', selected: false },
    { name: 'Cilantro', img:'https://elpoderdelconsumidor.org/wp-content/uploads/2022/03/cilantro-b.jpg', selected: false },
    { name: 'Albacora', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_6SnpgtxLAzwQr9UyChh7jDxkt2Sw1LxTg&s', selected: false },
    { name: 'Yuca', img:'https://www.clarin.com/2024/04/25/4yTGivlWV_2000x1500__1.jpg', selected: false },
    { name: 'Pimiento verde', img:'https://www.gastronomiavasca.net/uploads/image/file/3413/w700_pimiento_verde.jpg', selected: false },
    { name: 'Pimiento rojo', img:'https://fruittoday.com/wp-content/uploads/2023/03/es-bueno-comer-pimiento-rojo-e1679312898535.jpg', selected: false },
    { name: 'Apio', img:'https://herbario.istmas.edu.ec/wp-content/uploads/2022/05/APIO.jpg', selected: false },
    { name: 'Cubos de caldo de gallina', img:'https://www.elsoldetoluca.com.mx/incoming/guyodr-cubos-caldo-de-pollo1.jpg/ALTERNATES/LANDSCAPE_1140/Cubos%20caldo%20de%20pollo1.jpg', selected: false },
    { name: 'Diente de Ajo', img:'https://s1.elespanol.com/2021/03/01/actualidad/562704748_174218056_1024x576.jpg', selected: false },
    { name: 'Limón', img:'https://mejorconsalud.as.com/wp-content/uploads/2015/05/beneficios-limon-salud.jpg', selected: false },
    { name: 'Arroz', img:'https://www.naturalcastello.com/wp-content/uploads/2019/08/propiedades-arroz-750x448.jpg', selected: false },
    { name: 'Pollo', img:'https://i.blogs.es/8ceb02/pollo_entero/1366_2000.jpg', selected: false },
    { name: 'Huevo', img:'https://static.nationalgeographicla.com/files/styles/image_3200/public/ovosfotopaulolanzettaembrapa.jpeg?w=1900&h=1268', selected: false },
    { name: 'Leche evaporada', img:'https://imag.bonviveur.com/leche-evaporada.jpg', selected: false },
    { name: 'Sobre de caldo de gallina', img:'https://nestlefamilyclub.es/sites/default/files/styles/480x480_trans_/public/2022-09/08410100062167_A1N1.jpg?itok=uqMv7XEO', selected: false },
    { name: 'Queso', img:'https://imag.bonviveur.com/queso-fresco-casero.jpg', selected: false },
    { name: 'Cebolla perla', img:'https://www.organiclife.ec/wp-content/uploads/2019/01/Cebolla-perla-orga%CC%81nica.jpg', selected: false },
    { name: 'Papa', img:'https://saborusa.com.pa/imagesmg/imagenes/5ff3e6a0b703f_potatoes-food-supermarket-agriculture-JG7QGNY.jpg', selected: false },
    { name: 'Carne de Res', img: 'https://definicion.de/wp-content/uploads/2011/02/carne-1.jpg', selected: false },
    { name: 'Tomillo fresco', img:'https://arjosimarprod.vteximg.com.br/arquivos/ids/165774-1000-1000/Tomillo-Fresco-1U-1-6979.jpg?v=637789917659230000', selected: false },
    { name: 'Laurel', img:'https://elpoderdelconsumidor.org/wp-content/uploads/2024/07/laurel.jpg', selected: false },
    { name: 'Pasta de tomate', img:'https://cosascaseras.com/wp-content/uploads/sites/2/2016/11/salsa-tomate-concentrada-paste-de-tomate-9WMspa.jpg', selected: false },
    { name: 'Vino tinto', img:'https://media.glamour.mx/photos/65831110a2554c6e502ddcaf/1:1/w_2000,h_2000,c_limit/ritual-con-vino-tinto.jpg', selected: false },
    { name: 'Zanahoria', img:'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_b6b4af96_1200x630.jpg', selected: false },
    { name: 'Arvejas', img:'https://selecciones.com.ar/wp-content/uploads/2023/03/arveja-una-legumbre-ancestral-pero-siempre-vigente-6746-mainImage-0.jpg', selected: false },
    { name: 'Sal', img:'https://thefoodtech.com/wp-content/uploads/2020/05/sodio-en-alimentos--828x548.jpg', selected: false },
    { name: 'Platano verde', img:'https://www.shutterstock.com/image-photo/green-bananas-growing-on-trees-600nw-2394767809.jpg', selected: false },
    { name: 'Mantequilla', img:'https://thefoodtech.com/wp-content/uploads/2022/09/margarina-828x548.jpeg', selected: false },
    { name: 'Cebolla larga', img:'https://agrosemval.com/wp-content/uploads/2020/05/cebolla-larga-tokyo-white-ipc-01.jpg', selected: false },
    { name: 'Sal prieta', img:'https://www.confiesoquecocino.com/wp-content/uploads/2017/04/salprieta-4-2.jpg', selected: false },
    { name: 'Maní tostado', img:'https://diesfrut.com/wp-content/uploads/2022/03/ManiTostadoBeneficios.jpg', selected: false },
    { name: 'Leche semidescremada', img:'https://www.fybeca.com/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dw5c99bf73/images/large/38805_1.jpg?sw=1000&sh=1000', selected: false },
    { name: 'Fideo tornillo', img:'https://img.freepik.com/fotos-premium/fondo-textura-fideos-tornillo-tres-colores_437937-939.jpg', selected: false },
    { name: 'Atún', img:'https://regionnet.com.ar/wp-content/uploads/2022/05/beneficios-del-atun-1.jpg', selected: false },
    { name: 'Mayonesa', img:'https://i.blogs.es/8a4ab6/mayonesa_rec/450_1000.jpg', selected: false },
    { name: 'Mostaza', img:'https://mejorconsalud.as.com/wp-content/uploads/2022/06/mostaza.jpg', selected: false },
    { name: 'Pimienta negra', img:'https://actualfruveg.com/wp-content/uploads/2022/08/Pimienta-negra-2.jpg', selected: false },
    { name: 'Carne de cerdo', img:'https://secure.porcicultura.com/uploads/Upload-5ebd90f523a6d-14052020.jpeg', selected: false },
    { name: 'La sazón', img:'https://grobile.vip/wp-content/uploads/2020/08/lasazon1000G.jpg', selected: false },
    { name: 'Mote', img:'https://imag.bonviveur.com/mote-crudo.jpg', selected: false },
    { name: 'Papa chaucha', img:'https://www.allpa.org/wp-content/uploads/2018/12/F_Z10_papa-chaucha_1906_CG.jpg', selected: false },
    { name: 'Platano maduro', img:'https://m.media-amazon.com/images/I/71t5QELtaDL._AC_UF894,1000_QL80_.jpg', selected: false }
  ];
  constructor(private navCtrl: NavController) {}

  sendSelection() {
    const selectedItems = this.ingredients.filter(item => item.selected).map(item => item.name);
    console.log('Elementos seleccionados:', selectedItems);

    this.navCtrl.navigateForward('dish-selected', {
      queryParams: { ingredients: JSON.stringify(selectedItems)}
    });
  }

}