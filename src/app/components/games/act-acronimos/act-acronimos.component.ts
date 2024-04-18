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


  juego: boolean = true
  modalGanador: boolean = false
  modalPerdedor: boolean = false

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

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  numeroAleatorio = this.generarNumeroAleatorio(0, this.arratyprueba.length-1);


  arrayJson: any = this.arratyprueba[this.numeroAleatorio]
  palabra: string = ""
  filaActiva?: NodeListOf<HTMLDivElement>

  ngOnInit(): void {
    this.fu()
  }
  ngAfterViewInit() {
    this.filaActiva = document.querySelectorAll(".fila" + this.count)
    // console.log(this.filaActiva)
    // console.log(this.count)
  }

  fila1Cajas: string[] = [];
  fila2Cajas: string[] = [];
  fila3Cajas: string[] = [];
  fila4Cajas: string[] = [];
  totalFilasCajas: any = [];
  cantidadCaja: number = 0

  fu() {
    this.cantidadCaja = this.arrayJson.abreviacion.length;
    this.palabra = this.arrayJson.abreviacion

    for (let index = 0; index < this.cantidadCaja; index++) {
      this.fila1Cajas[index] = "";
      this.fila2Cajas[index] = "";
      this.fila3Cajas[index] = "";
      this.fila4Cajas[index] = "";
    }

    this.totalFilasCajas.push(this.fila1Cajas)
    this.totalFilasCajas.push(this.fila2Cajas)
    this.totalFilasCajas.push(this.fila3Cajas)
    this.totalFilasCajas.push(this.fila4Cajas)

  }

  id: number = 0

  divEvaluar: boolean = false
  casillasLlenas() {
    let contador = 0
    this.totalFilasCajas[this.id].forEach((element: any) => {
      if (element != "") { contador++ }
    });
    if (contador == this.cantidadCaja) {
      this.divEvaluar = true
    }
  }

  indexCuadroFila1 = 0
  valorCuadroFila1(valor: any) {
    this.totalFilasCajas[this.id][this.indexCuadroFila1] = valor
    this.casillasLlenas()
  }

  posicionCuadroFila1(index: any) {
    this.indexCuadroFila1 = index
  }

  cuadroFila1: any = [];

  evaluarAcronimo() {
    let contador = 0

    console.log(this.totalFilasCajas[this.id])

    let opcionesCorectas = 0
    this.totalFilasCajas[this.id].forEach((element: any) => {
      if (element == this.arrayJson.palabras[contador]) {
        this.filaActiva![contador].style.background = "rgb(0, 236, 0)"
        opcionesCorectas++
      }
      else { this.filaActiva![contador].style.background = "gray" }
      contador++
      if (this.count == 4) {
        this.juego = false
        this.modalPerdedor = true
      }
      if (opcionesCorectas == this.cantidadCaja) {
        this.juego = false
        this.modalGanador = true
      }
    });

    this.id++

    if (this.filaActiva !== null) {
      this.filaActiva!.forEach(element => {
        element.classList.remove("showHover")
      });
    }
    this.count++
    if (this.count <= 4) {
      this.filaActiva = document.querySelectorAll(".fila" + this.count)
      this.filaActiva.forEach(element => {
        element.classList.add("showHover")
      });
    }
    this.divEvaluar = false
  }

  recargarPagina() {
    window.location.reload();
  }
}
