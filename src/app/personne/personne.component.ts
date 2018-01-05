import {Component, Input, OnInit} from '@angular/core';

import {Personne} from '../Models/personne';
import {Adresse} from '../Models/adresse';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
@Input() personne:Personne;
    public currentAddress:Adresse;
  constructor() { }

  ngOnInit() {
  }

}
