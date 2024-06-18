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
import { AuthService } from './auth.service';
import { InscrireComponent } from './inscrire/inscrire.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaireComponent,
    ProjetComponent,
    Home1Component,
    InscrireComponent,
   
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // Add this line

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
