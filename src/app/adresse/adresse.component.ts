import {Component, Injector, Input, OnInit} from '@angular/core';
import {Adresse} from '../Models/adresse';
import {PersonneComponent} from '../personne/personne.component';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input() adresse:Adresse;

  parent:PersonneComponent;
  constructor(private inj:Injector) {
    this.parent = inj.get(PersonneComponent);
  }

  ngOnInit() {
  }

  public setSelected(){
    this.parent.currentAddress = this.adresse;
  }

}
