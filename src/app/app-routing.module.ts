import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ProjetComponent } from './projet/projet.component';
import { InscrireComponent } from './inscrire/inscrire.component';

const routes: Routes = [
  { path: '', redirectTo: '/home1', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'home1', component: Home1Component },
  { path: 'projet', component: ProjetComponent },
  { path: 's\'inscrire', component: InscrireComponent } // Ajouter ce chemin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
