import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { ModulesComponent } from './modules/modules.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'components', component: ComponentsComponent},
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'data-binding', component: DataBindingComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'modules', component: ModulesComponent},
  { path: 'navigation', component: NavigationComponent},
  { path: '**', component: ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
