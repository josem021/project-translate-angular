import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActAcronimosComponent } from './components/games/act-acronimos/act-acronimos.component';
import { ActVerbosFracialesComponent } from './components/games/act-verbos-fraciales/act-verbos-fraciales.component';
import { ActPalabrasComponent } from './components/games/act-palabras/act-palabras.component';
import { ActPalabrasVerbosFracialesComponent } from './components/games/act-palabras-verbos-fraciales/act-palabras-verbos-fraciales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ActAcronimosComponent,ActVerbosFracialesComponent,ActPalabrasComponent,ActPalabrasVerbosFracialesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-translate-angular';
}
