import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StatsComponent } from './stats/stats.component';
import { CompareComponent } from './compare/compare.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
    {path:'index', component: IndexComponent},
    {path:'compare', component: CompareComponent},
    {path:'stats', component: StatsComponent},
    {path:'', redirectTo: '/index', pathMatch:'full'},
    {path:'**', redirectTo: '/index', pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StatsComponent,
    CompareComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
