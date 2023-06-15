import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{path:'',redirectTo:'home', pathMatch: 'full' },
  //  { path: 'custom-notices', component: CustomNoticesComponent },
  // { path: 'chat', component: ChatComponent },
  // { path: 'contacts', component: ReceiverComponentComponent },
  // { path: 'bio', component: ReceiverComponentComponent },
  // { path: 'snatch', component: ReceiverComponentComponent },
  { path: 'home', component: AppComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
