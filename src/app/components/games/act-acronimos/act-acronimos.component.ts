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
      { titulo: "Html",texto: [["HYPE","Hyper","HAVE"],["HYPE2","HAPPY2","text"],["HYPE3","HAPPY3","HAVE3"],["HYPE3","HAPPY3","HAVE3"]], palabra:['Hyper','text','Markup','Language'] }
  ]
  MostrarOpciones() {
    alert("Si., Funciona")
  }

}
