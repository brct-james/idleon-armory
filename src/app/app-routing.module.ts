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

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'character', component: CharacterInformationComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'guides', redirectTo: 'guides/tutorial', pathMatch: 'full'},
  { path: 'guides', children: [
    { path: "dailies", component: DailiesComponent },
    { path: "events", component: EventsComponent },
    { path: "gems", component: GemsComponent },
    { path: "new-player", component: NewPlayerComponent },
    { path: "tutorial", component: TutorialComponent },
    { path: "**", component: GuideSelectorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
