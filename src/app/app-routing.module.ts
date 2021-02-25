import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { TalentsComponent } from './talents/talents.component';
import { GuidesComponent } from './guides/guides.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'character', component: CharacterInformationComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'guides', redirectTo: 'guides/tutorial'},
  { path: 'guides', children: [
    { path: "**", component: GuidesComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
