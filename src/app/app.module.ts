import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TypeSelectorComponent } from './type-selector/type-selector.component';
import { EffectBoxComponent } from './effect-box/effect-box.component';
import { TypeBadgeComponent } from './type-badge/type-badge.component';
import { FormsModule } from '@angular/forms';
import { AttackResultsComponent } from './attack-results/attack-results.component';
import { DefenseResultsComponent } from './defense-results/defense-results.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'atk', component: AttackResultsComponent },
  { path: 'def', component: DefenseResultsComponent },
  { path: "", redirectTo: 'index', pathMatch: 'full'},
  {path: "**", redirectTo: 'index', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    TypeSelectorComponent,
    EffectBoxComponent,
    TypeBadgeComponent,
    AttackResultsComponent,
    DefenseResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
