import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ProjetComponent } from './projet/projet.component';
import { Home1Component } from './home1/home1.component';
import { ConfigPopupComponent } from './config-popup/config-popup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaireComponent,
    ProjetComponent,
    Home1Component,
    ConfigPopupComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
