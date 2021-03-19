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
import { BlunderhillsComponent } from './guides/blunderhills/blunderhills.component';
import { YumYumDesertComponent } from './guides/yum-yum-desert/yum-yum-desert.component';
import { SubsystemsComponent } from './subsystems/subsystems.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'character', component: CharacterInformationComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'subsystems-1', component: SubsystemsComponent },
  { path: 'subsystems-2', component: SubsystemsComponent },
  { path: 'guides', redirectTo: 'guides/tutorial', pathMatch: 'full'},
  { path: 'guides', children: [
    { path: "dailies", component: DailiesComponent },
    { path: "events", component: EventsComponent },
    { path: "gems", component: GemsComponent },
    { path: "new-player", component: NewPlayerComponent },
    { path: "tutorial", component: TutorialComponent },
    { path: "amarok", component: AmarokComponent },
    { path: "efaunt", component: EfauntComponent },
    { path: "blunderhills", component: BlunderhillsComponent },
    { path: "yum-yum-desert", component: YumYumDesertComponent },
    { path: "**", component: GuideSelectorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
