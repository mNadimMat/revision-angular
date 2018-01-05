import {Component} from '@angular/core';
import {Personne} from './Models/personne';
import {Adresse} from './Models/adresse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  personnes: Personne[] ;

  constructor(){
    this.personnes =
      [
        new Personne('Nadim', 'Matoussi', 24, [new Adresse('Ariana', 'City'),
        new Adresse('Tunis', 'street')]),
        new Personne('Karim', 'Alouini', 24, [new Adresse('Ariana', 'City'),
          new Adresse('Tunis', 'street')])
      ];




  }
}


