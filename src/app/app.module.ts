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
import { GuideSelectorComponent } from './guide-selector/guide-selector.component';
import { TutorialComponent } from './guides/tutorial/tutorial.component';
import { EventsComponent } from './guides/events/events.component';
import { NewPlayerComponent } from './guides/new-player/new-player.component';
import { GemsComponent } from './guides/gems/gems.component';
import { DailiesComponent } from './guides/dailies/dailies.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterSelectorComponent,
    CharacterInformationComponent,
    EquipmentComponent,
    TalentsComponent,
    EquipmentCategoryComponent,
    GuideSelectorComponent,
    TutorialComponent,
    EventsComponent,
    NewPlayerComponent,
    GemsComponent,
    DailiesComponent
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
