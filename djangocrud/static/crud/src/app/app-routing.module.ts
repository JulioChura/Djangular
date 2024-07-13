import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// Importa aquí tus componentes

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Define tus rutas aquí
  // Ejemplo:
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
