import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
 {path:"products", loadChildren:"./products/product.module#ProductModule" },
 {path:"home", component:WelcomeComponent},
 {path:"", redirectTo:"home", pathMatch:"full"},
 {path:"**", component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
