import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActAcronimosComponent } from './components/games/act-acronimos/act-acronimos.component';
import { ActPalabrasComponent } from './components/games/act-palabras/act-palabras.component';
import { ActPalabrasVerbosFracialesComponent } from './components/games/act-palabras-verbos-fraciales/act-palabras-verbos-fraciales.component';
import { ActVerbosFracialesComponent } from './components/games/act-verbos-fraciales/act-verbos-fraciales.component';

export const routes: Routes = [
    {path: 'act-acronimos', component: ActAcronimosComponent},
    {path: 'act-palabras', component: ActPalabrasComponent},
    {path: 'act-palabras-verbos-fraciales', component: ActPalabrasVerbosFracialesComponent},
    {path: 'act-verbos-fraciales', component: ActVerbosFracialesComponent },
    {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: 'home'}
];
