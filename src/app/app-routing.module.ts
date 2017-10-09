import { BetaComponent } from './master/beta/beta.component';
import { AlphaComponent } from './master/alpha/alpha.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: 'alphacomponent', component: AlphaComponent,
    children: [
      { path: 'betacomponent', component: BetaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
