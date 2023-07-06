import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { PaginaContattiComponent } from './components/pagina-contatti/pagina-contatti.component';
import { PaginaFotoEventiComponent } from './components/pagina-foto-eventi/pagina-foto-eventi.component';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';




const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  { path: 'contatti', component: PaginaContattiComponent },
  { path: 'foto-eventi', component: PaginaFotoEventiComponent },
  { path: 'home', component: PaginaHomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
