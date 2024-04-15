import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

@Component({
  selector: 'app-act-acronimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './act-acronimos.component.html',
  styleUrl: './act-acronimos.component.css'
})
export class ActAcronimosComponent {
  arratyprueba: any = [
    { titulo: "A", text1: "jean", text2: "carlos", text3: "perez", text4: "epieyu" },
    { titulo: "A", text1: "jean", text2: "carlos", text3: "perez", text4: "epieyu" },
    { titulo: "A", text1: "jean", text2: "carlos", text3: "perez", text4: "epieyu" },
    { titulo: "A", text1: "jean", text2: "carlos", text3: "perez", text4: "epieyu" },
  ]
  MostrarOpciones() {
    alert("Si., Funciona")
  }

}
