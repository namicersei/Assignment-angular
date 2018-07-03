import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
// Chatbox components
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemPartnerComponent } from './message-item-partner/message-item-partner.component';
// Firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';

import { Message } from './core/message';
import { MessageboxService } from './core/messagebox.service';

import { YoutubeComponent } from './youtube/youtube.component';

// Map
import { MapSectionComponent } from './map-section/map-section.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import {CloudineryComponent } from './cloudinery/cloudinery.component';
// import { Observable } from 'rxjs';
import { FileUploadModule } from 'ng2-file-upload';
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import { AudioComponent } from './audio/audio.component';
import { RazorComponent } from './razor/razor.component';
import { CountryComponent } from './country/country.component';
import { OneComponent } from './one/one.component';
import { CountryService } from './core/country.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ValidationComponent } from './validation/validation.component';



// import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider} from 'angular5-social-login';

// const config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('Facebook-App-Id')
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessageItemComponent,
    MessageListComponent,
    MessageItemPartnerComponent,
    YoutubeComponent,
    MapSectionComponent,
    CloudineryComponent,
    AudioComponent,
    RazorComponent,
    CountryComponent,
    OneComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'assignment'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAe0MI7TzZjd2WmwxnD3KY7jTEOnNZlkuI',
      libraries: ['places']
    }),
    Ng2CloudinaryModule,
    CloudinaryModule,
    FileUploadModule

  ],
  providers: [
    MessageboxService,
     CountryService,
     provideCloudinary(require('cloudinary-core'), { cloud_name: 'dvia0adci' } as CloudinaryConfiguration)],
  bootstrap: [AppComponent]
})
export class AppModule {

message_list: AngularFireList<any>;

 }


