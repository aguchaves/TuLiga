import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  stories: Object = {
    'San Lorenzo': {
      text: 'El equipo profesional masculino de básquet del Club Atlético San Lorenzo de Almagro es originario de la Ciudad de Buenos Aires y actualmente juega en la máxima categoría del básquetbol argentino, la Liga Nacional de Básquet (LNB). En el periodo 1942-1973 destacó por lo hecho a nivel amateur y semi-amateur, en el que consiguió 29 títulos a nivel regional, ganó el Campeonato Argentino de Clubes y fue subcampeón sudamericano en 1958. Además, fue uno de los clubes fundadores de la LNB y jugó el partido inaugural de dicho torneo el 26 de abril de 1985. En 2016, a 31 años de su primera participación, fue campeón de la LNB tras vencer a La Unión de Formosa en las finales. En la temporada 2016-17 se consagró como el mejor bicampeón de la LNB con una efectividad del 88,4 %. San Lorenzo es además el primer y único equipo del básquet argentino que enfrentó a un equipo de la NBA, en 2016.1​',
      img: 'http://www.laliganacional.com.ar/uploadsfotos/plantel_01.jpg'
    },
    'Gimnasia (CR)': {
      text: 'Gimnasia y Esgrima de Comodoro Rivadavia, nominado localmente Gimnasia de Comodoro, es un club deportivo ubicado en la ciudad de Comodoro Rivadavia, Argentina, cuya actividad principal es el basquetbol. Se desempeña en la Liga Nacional A de la Liga Nacional de Básquet de Argentina y tiene localía en el estadio "Socios Fundadores". Sus máximos logros son haber obtenido el título en la Liga Nacional de Básquet 2005-06 y el Torneo Super 4 Circus 2015. Es el tercer equipo con más temporadas en la Liga Nacional de Básquet con la característica de que transcurrieron de forma consecutiva, sin haber descendido en toda su historia. Desde el año 2011 y hasta 2016 recibió el apoyo económico del Grupo Indalo, provocando que el equipo se denominase por motivos de patrocinio Gimnasia Indalo. A lo largo de su historia contó con múltiples disciplinas deportivas. Hoy cuenta entre sus actividades al handball y al atletismo.',
      text2: 'Fundación: Un grupo de pobladores de Comodoro Rivadavia, extranjeros en su mayoría, fundaron el 13 de febrero del año 1919 al Club Gimnasia y Esgrima. El presidente electo, Eloy Cánovas, el vicepresidente Juan Larrea y el secretario Mario Toulet fueron los encargados de firmar el acta. Esta institución que abriera sus puertas dieciocho años después que se erigiera la ciudad más grande de la Patagonia Argentina, Comodoro Rivadavia (1901), tuvo renombre en el ámbito deportivo y social, desde sus inicios.',
      text3: 'A partir de 1942 fue la entidad organizadora de la recordada Maratón de los barrios, evento socio-deportivo de gran trascendencia en la zona. Fue el primer campeón provincial de básquetbol, al fundarse en 1941, la Federación de Básquetbol del Chubut. Junto al Club Social y Deportivo Ing. Luis A. Huergo, fueron los pioneros en la práctica del tenis en la ciudad. Ofreció un sin número de campeonatos a sus asociados, en el fútbol local. Muchas otras actividades deportivas se practicaron en la institución y ofrecieron gratificantes momentos a sus seguidores y a la ciudad en general: rugby, esgrima, hockey, artes marciales, ajedrez, patín y vóley sumadas a eventos sociales y culturales, fueron y aún siguen siendo una carta de presentación para esta Institución.',
      img: 'http://www.laliganacional.com.ar/uploadsfotos/campe__n_lnb_2005-2006_-_gye_cr.jpg',
      img2: 'http://www.sportdigital.com.ar/12-2015/resize_1451053660.jpg' 
    },
    'Boca': {
      text: 'El básquet del Club Atlético Boca Juniors es uno de los más importantes y exitosos de la Argentina, ya que tuvo gran protagonismo tanto en la era amateur y semi-amateur de las distintas ligas de básquet metropolitano de la ciudad de Buenos Aires, como en la Liga Nacional de Básquet, donde es uno de los máximos campeones. Grandes jugadores y entrenadores vistieron la casaca azul y oro antes y/o después de representar a la selección nacional de básquet e incluso de jugar en las grandes ligas de Europa y la NBA.',
      text2: 'Amateurismo: La sección de básquetbol del club es creada en 1929 y al año siguiente se afilia en la Federación Argentina de Básquetbol, la única entidad rectora del básquet metropolitano hasta entonces, donde competiría en divisiones menores. La historia grande del básquet surgiría recién con la creación de la nueva entidad rectora del básquetbol porteño, la Asociación de Básquet de Buenos Aires de organización semiamateur y donde se afiliarían la mayoría de los clubes de fútbol. Desde 1937 hasta 1974 el básquetbol de la ciudad y alrededores estaría dividido entre "los que no cobran" de la FABB, luego Asociación Porteña de Básquet desde 1954 y "los que cobran" de la ABA, aunque existirían varios matices para definir el amateurismo del básquet. Boca Juniors bajo la organización de la ABA compite los Torneos Apertura hasta mitad de año y los Campeonatos Oficiales en el segundo semestre y desde 1951 los Torneos Metropolitanos.',
      img: 'http://www.laliganacional.com.ar/uploadsfotos/campe__n_lnb_2003-2004_-_boca_juniors.jpg'
    }
  };
  team: any = '';
  story: String = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad');
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.team = userData.storedData.team;

      this.story = this.stories[this.team];
    }
  }
}
