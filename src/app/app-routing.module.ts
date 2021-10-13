import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CustomNoticesComponent } from './custom-notices/custom-notices.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';


const routes: Routes = [
  {path:'',redirectTo:'custom-notices', pathMatch: 'full' },
  { path: 'custom-notices', component: CustomNoticesComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'contacts', component: ReceiverComponentComponent },
  { path: 'bio', component: ReceiverComponentComponent },
  { path: 'snatch', component: ReceiverComponentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
