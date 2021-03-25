import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { TalentsComponent } from './talents/talents.component';
import { GuideSelectorComponent } from './guide-selector/guide-selector.component';
import { DailiesComponent } from './guides/dailies/dailies.component';
import { EventsComponent } from './guides/events/events.component';
import { GemsComponent } from './guides/gems/gems.component';
import { NewPlayerComponent } from './guides/new-player/new-player.component';
import { TutorialComponent } from './guides/tutorial/tutorial.component';
import { AmarokComponent } from './guides/amarok/amarok.component';
import { EfauntComponent } from './guides/efaunt/efaunt.component';
import { BlunderhillsGuideComponent } from './guides/blunderhills/blunderhills.component';
import { YumYumDesertGuideComponent } from './guides/yum-yum-desert/yum-yum-desert.component';
import { BlunderHillsComponent } from './blunder-hills/blunder-hills.component';
import { YumYumDesertComponent } from './yum-yum-desert/yum-yum-desert.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', redirectTo: 'a/instructions', pathMatch: 'full'},
  { path: 'a', children: [
    { path: "instructions", component: ApiComponent },
  ]},
  { path: 'b', redirectTo: 'b/dashboard', pathMatch: 'full'},
  { path: 'b', children: [
    { path: "dashboard", component: DashboardComponent },
    { path: 'character', component: CharacterInformationComponent },
    { path: 'equipment', component: EquipmentComponent },
    { path: 'talents', component: TalentsComponent },
    { path: 'blunder-hills', component: BlunderHillsComponent },
    { path: 'yum-yum-desert', component: YumYumDesertComponent },
    { path: 'cards', component: CardsComponent },
  ]},
  { path: 'g', redirectTo: 'g/tutorial', pathMatch: 'full'},
  { path: 'g', children: [
    { path: "dailies", component: DailiesComponent },
    { path: "events", component: EventsComponent },
    { path: "gems", component: GemsComponent },
    { path: "new-player", component: NewPlayerComponent },
    { path: "tutorial", component: TutorialComponent },
    { path: "amarok", component: AmarokComponent },
    { path: "efaunt", component: EfauntComponent },
    { path: "blunder-hills", component: BlunderhillsGuideComponent },
    { path: "yum-yum-desert", component: YumYumDesertGuideComponent },
    { path: "**", component: GuideSelectorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
