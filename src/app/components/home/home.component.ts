import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarSkyComponent } from "../star-sky/star-sky.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterLink, StarSkyComponent]
})
export class HomeComponent {

}
