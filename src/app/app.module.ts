import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './App.routing.module';

import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModele } from './core/core.modele';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModele,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
