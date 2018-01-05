import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { AdresseComponent } from './adresse/adresse.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
