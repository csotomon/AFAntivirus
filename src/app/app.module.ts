import { FileUploadModule, GrowlModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule } from '@angular/material';
import { AutomataComponent } from './automata/automata.component';
import { SafeHtmlPipePipe } from './../shared/safe-html-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AutomataComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    FileUploadModule,
    GrowlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
