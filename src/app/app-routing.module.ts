import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { CloudineryComponent } from './cloudinery/cloudinery.component';
import { AudioComponent } from './audio/audio.component';
import { RazorComponent } from './razor/razor.component';
import { CountryComponent } from './country/country.component';
import { OneComponent } from './one/one.component';
import { ValidationComponent } from './validation/validation.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'message-item', component: MessageItemComponent},
  {path: 'message-list', component: MessageListComponent},
  {path: 'youtube', component: YoutubeComponent},
  {path: 'map-section', component: MapSectionComponent},
  {path: 'cloudinery', component: CloudineryComponent},
  {path: 'youtube', component: YoutubeComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'razor', component: RazorComponent},
  {path: 'country', component: CountryComponent},
  {path: 'one', component: OneComponent},
  {path: 'validation', component: ValidationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
