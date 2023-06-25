import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TypeSelectorComponent } from './type-selector/type-selector.component';
import { EffectBoxComponent } from './effect-box/effect-box.component';
import { TypeBadgeComponent } from './type-badge/type-badge.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TypeSelectorComponent,
    EffectBoxComponent,
    TypeBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
