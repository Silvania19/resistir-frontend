import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureAddComponent } from './components/temperature-add/temperature-add.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'add-temperature', component: TemperatureAddComponent},
  { path : 'home', component: HomeComponent},
  {path: "**", redirectTo: "", component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
