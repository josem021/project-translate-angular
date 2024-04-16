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
    { titulo: "Html", texto: [["Hype","Hyper","Have"],["Title","Texto","Text"],["Markup","Marke","Mark"],["Lion","Language","Luz"]], palabra:['Hyper','text','Markup','Language'] }
  ]
  MostrarOpciones() {
    alert("Si., Funciona")
    console.log("sii")
  }

}
