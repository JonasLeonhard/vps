import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {CvComponent} from './pages/cv/cv.component';
import {Error404Component} from './error404/error404.component';
import {SkillsComponent} from './pages/cv/skills/skills.component';

const routes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {
    path: 'cv',
    component: CvComponent
  },
  {path: '**', pathMatch: 'full', component: Error404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CvComponent,
    Error404Component,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
