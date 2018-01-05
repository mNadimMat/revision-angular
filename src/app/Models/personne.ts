import {Adresse} from './adresse';

export class Personne{
  constructor(
    public nom:string,
    public prenom:string,
    public age:number,
    public adresses:Adresse[]
  ){}
}
