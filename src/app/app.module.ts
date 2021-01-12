import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterSelectorComponent } from './character-selector/character-selector.component';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { TalentsComponent } from './talents/talents.component';
import { EquipmentCategoryComponent } from './equipment-category/equipment-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterSelectorComponent,
    CharacterInformationComponent,
    EquipmentComponent,
    TalentsComponent,
    EquipmentCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
