import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsComponent } from './components/components.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FramedDetailsComponent } from './components/framed-details/framed-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { ModulesComponent } from './modules/modules.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageOverlayComponent } from './image-overlay/image-overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponentsComponent,
    InterpolationComponent,
    FramedDetailsComponent,
    DirectivesComponent,
    DataBindingComponent,
    PipesComponent,
    ServicesComponent,
    ModulesComponent,
    NavigationComponent,
    ImageOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
