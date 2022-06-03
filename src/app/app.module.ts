import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './services/ProductServise';
import {MenubarModule} from 'primeng/menubar';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmPopupModule} from 'primeng/confirmpopup';


import {ToastModule} from 'primeng/toast';


import {MultiSelectModule} from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    RadioButtonModule,
    MultiSelectModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputNumberModule,
    ConfirmPopupModule,
    ToastModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { } 