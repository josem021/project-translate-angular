import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: 'app-act-acronimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './act-acronimos.component.html',
  styleUrl: './act-acronimos.component.css'
})
export class ActAcronimosComponent implements OnInit {

  count = 1
  arratyprueba: any = [
    {
      "abreviacion": "API",
      "ingles": "Application Programming Interface",
      "espanol": "Interfaz de programación de aplicaciones",
      "palabras": ["Application", "Programming", "Interface"],
      "test": [["a", "Application", "a"], ["Programming", "p", "p"], ["i", "i", "Interface"]]
    },
    {
      "abreviacion": "HTTP",
      "ingles": "Hyper text Transfer Protocol",
      "espanol": "Protocolo de Transferencia de Hipertexto",
      "palabras": ["Hyper", "Text", "Transfer", "Protocol"],
      "test": [["a", "Hyper", "a"], ["Text", "p", "p"], ["i", "Transfer", "i"], ["i", "i", "Protocol"]]
    },
    {
      "abreviacion": "JSON",
      "ingles": "Java Script Object Model",
      "espanol": "Modelo de objetos Javascript",
      "palabras": ["Java", "Script", "Object", "Model"],
      "test": [["a", "Java", "a"], ["Script", "p", "p"], ["i", "i", "Object"], ["Model", "i", "i"]]
    }
  ]

  arrayJson: any = this.arratyprueba[1]
  palabra: string = ""
  filaActiva?:NodeListOf<HTMLDivElement>
  ngOnInit(): void {
    this.fu()
  }
  ngAfterViewInit(){
    this.filaActiva = document.querySelectorAll(".fila"+this.count)
    console.log(this.filaActiva)
    console.log(this.count)
  }

  fila1Cajas: string[] = [];
  cantidadCaja: number = 0

  fu() {
    this.cantidadCaja = this.arrayJson.abreviacion.length;
    this.palabra = this.arrayJson.abreviacion

    console.log(this.palabra)
    for (let index = 0; index < this.cantidadCaja; index++) {
      this.fila1Cajas[index] = "";
      console.log("fila1Cajas")
      console.log(this.fila1Cajas)
    }
    // console.log(cantidadCaja)
    // console.log(this.fila1Cajas[1]); 

    for (const key in this.arrayJson) {
      if (key == "test") {
        // console.log(key + ": " + this.arrayJson[key]);
      }
    }

    // Obtener el elemento por su ID
    const miDiv = document.getElementById("fila1Acronimo");

    if (miDiv) {
      // Agregar una clase al elemento
      miDiv.classList.add("cuadros_seleccionado:hover~.conten_hover");
    }
    

    // Eliminar una clase del elemento
    // miDiv.classList.remove("claseExistente");
  }

  divEvaluar: boolean = false
  casillasLlenas() {
    let contador = 0
    this.fila1Cajas.forEach(element => {
      if (element != "") { contador++ }
    });
    if (contador == this.cantidadCaja) {
      this.divEvaluar = true
    }
  }

  indexCuadroFila1 = 0
  valorCuadroFila1(valor: any) {
    this.fila1Cajas[this.indexCuadroFila1] = valor
    console.log("this.fila1Cajas[this.indexCuadroFila1]")
    console.log(this.fila1Cajas)
    this.casillasLlenas()
  }

  posicionCuadroFila1(index: any) {
    this.indexCuadroFila1 = index
  }

  cuadroFila1: any = [];


  evaluarAcronimo() {
    let contador = 0
    let opcionesCorectas = 0
    this.fila1Cajas.forEach(element => {
      if (element == this.arrayJson.palabras[contador]) {
        console.log(this.filaActiva)
        this.filaActiva![contador].style.background = "rgb(0, 236, 0)"
        //Si todos son correctas mostrar modal Modo ganar
      }
      else { this.filaActiva![contador].style.background = "gray" }
      contador++
      if(this.count == 4){
        // mostrar modal Modo perder
      }
    });

    if(this.filaActiva !== null){
      this.filaActiva!.forEach(element => {
          element.classList.remove("showHover")
      });
    }
    this.count++
    if(this.count <= 4){
      this.filaActiva = document.querySelectorAll(".fila"+this.count)
      this.filaActiva.forEach(element => {
        element.classList.add("showHover")
      });
    }

  }

}
