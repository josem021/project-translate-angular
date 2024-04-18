import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarSkyComponent } from "../../star-sky/star-sky.component";

@Component({
    selector: 'app-act-palabras',
    standalone: true,
    templateUrl: './act-palabras.component.html',
    styleUrl: './act-palabras.component.css',
    imports: [CommonModule, StarSkyComponent]
})
export class ActPalabrasComponent implements OnInit {
  containerEmojis?: NodeListOf<HTMLDivElement>
  elemntGame: any = []
  emojiNoEmpty: Array<number> = []

  emojiChilds: Array<number>=[]
  count = 0
  count2 = 0
  words:any [] =[
    {
      "ingles": "Loop",
      "espanol": "Bucle",
      "image": [
        "🔁"
      ]
    },
    {
      "ingles": "Break",
      "espanol": "Romper",
      "image": [
        "⛓️",
        "empty",
        "💥"
      ]
    },
    {
      "ingles": "Code",
      "espanol": "Codigo",
      "image": [
        "🤚",
        "💻"
      ]
    },
    {
      "ingles": "Array",
      "espanol": "Coleccion",
      "image": [
        "📝"
      ]
    },
    {
      "ingles": "Object",
      "espanol": "Objecto",
      "image": [
        "🌟"
      ]
    },
    {
      "ingles": "Argument",
      "espanol": "Argumento",
      "image": [
        "🗣",
        "📑"
      ]
    },
    {
      "ingles": "Database",
      "espanol": "Base de datos",
      "image": [
        "🗄"
      ]
    },
    {
      "ingles": "Conditional",
      "espanol": "Condicional",
      "image": [
        "❓",
        "empty",
        "❗"
      ]
    },
    {
      "ingles": "Inheritance",
      "espanol": "Herencia",
      "image": [
        "👱",
        "empty",
        "empty",
        "🧬"
      ]
    },
    {
      "ingles": "Syntax",
      "espanol": "Sintaxis",
      "image": [
        "🔢",
        "empty",
        "🔠",
        "#️⃣"
      ]
    },
    {
      "ingles": "Style",
      "espanol": "Estilo",
      "image": [
        "👔"
      ]
    },
    {
      "ingles": "Component",
      "espanol": "Componentes",
      "image": [
        "🧩",
        "empty",
        "empty",
        "📁"
      ]
    },
    {
      "ingles": "Generate",
      "espanol": "Generar",
      "image": [
        "🖱️",
        "📄"
      ]
    },
    {
      "ingles": "Run",
      "espanol": "Correr",
      "image": [
        "🏃"
      ]
    },
    {
      "ingles": "Save",
      "espanol": "Salvar",
      "image": [
        "💾"
      ]
    },
    {
      "ingles": "While",
      "espanol": "Mientras",
      "image": [
        "🔃"
      ]
    },
    {
      "ingles": "For",
      "espanol": "Para",
      "image": [
        "🔄"
      ]
    },
    {
      "ingles": "Developer",
      "espanol": "Desarrollador",
      "image": [
        "👨‍💻"
      ]
    },
    {
      "ingles": "Return",
      "espanol": "Retornar",
      "image": [
        "↩️"
      ]
    },
    {
      "ingles": "Implement",
      "espanol": "Implementar",
      "image": [
        "🖥️",
        "empty",
        "empty",
        "🔛"
      ]
    },
    {
      "ingles": "Concatenate",
      "espanol": "Concatenar",
      "image": [
        "🅰️",
        "empty",
        "🅱️",
        "empty",
        "➕"
      ]
    },
    {
      "ingles": "Import",
      "espanol": "Importar",
      "image": [
        "📥"
      ]
    },
    {
      "ingles": "Build",
      "espanol": "construcción",
      "image": [
        "🏗️"
      ]
    },
    {
      "ingles": "Commit",
      "espanol": "Comprometerse",
      "image": [
        "📤",
        "📩"
      ]
    },
    {
      "ingles": "Encapsulation",
      "espanol": "Encapsulamiento",
      "image": [
        "💊"
      ]
    },
    {
      "ingles": "Polymorphism",
      "espanol": "Polimorfismo",
      "image": [
        "📂",
        "📁"
      ]
    },
    {
      "ingles": "Container",
      "espanol": "Contenedor",
      "image": [
        "📦"
      ]
    },
    {
      "ingles": "Debugging",
      "espanol": "Depuracion",
      "image": [
        "🔍",
        "✔️"
      ]
    },
    {
      "ingles": "Namespace",
      "espanol": "Espacio de Nombres",
      "image": [
        "🗒",
        "🔡"
      ]
    },
    {
      "ingles": "right",
      "espanol": "Derecha",
      "image": [
        "➡️"
      ]
    },
    {
      "ingles": "Top",
      "espanol": "Abajo",
      "image": [
        "⬆️"
      ]
    },
    {
      "ingles": "Bottom",
      "espanol": "Arriba",
      "image": [
        "⬇️"
      ]
    },
    {
      "ingles": "Justify",
      "espanol": "justificar",
      "image": [
        "📏"
      ]
    },
    {
      "ingles": "left",
      "espanol": "Izquierda",
      "image": [
        "➡️"
      ]
    },
    {
      "ingles": "Label",
      "espanol": "Etiqueta",
      "image": [
        "🏷️"
      ]
    },
    {
      "ingles": "Delete",
      "espanol": "Borrar",
      "image": [
        "🗑️"
      ]
    },
    {
      "ingles": "Abstraction",
      "espanol": "Abstraccion",
      "image": [
        "empty",
        "📗",
        "📚",
        "empty"
      ]
    },
    {
      "ingles": "Concurrency",
      "espanol": "Concurrencia",
      "image": [
        "👨‍💻",
        "empty",
        "🛢"
      ]
    },
    {
      "ingles": "Parallelism",
      "espanol": "Paralelismo",
      "image": [
        "🔀"
      ]
    },
    {
      "ingles": "Bug",
      "espanol": "Fallo",
      "image": [
        "🚫",
        "empty",
        "🔌",
        "empty",
        "🤦"
      ]
    },
    {
      "ingles": "Data",
      "espanol": "Datos",
      "image": [
        "empty",
        "📓",
        "📜",
        "empty"
      ]
    },
    {
      "ingles": "Services",
      "espanol": "Servicios",
      "image": [
        "empty",
        "empty",
        "🛠",
        "💼"
      ]
    },
    {
      "ingles": "Injectable",
      "espanol": "Inyectable",
      "image": [
        "💉"
      ]
    },
    {
      "ingles": "Export",
      "espanol": "Exportar",
      "image": [
        "empty",
        "📤",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Routes",
      "espanol": "Rutas",
      "image": [
        "🌎",
        "empty",
        "🗺️",
        "empty",
        "🚶"
      ]
    },
    {
      "ingles": "Import",
      "espanol": "Importar",
      "image": [
        "empty",
        "📥",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Loading",
      "espanol": "Cargando",
      "image": [
        "empty",
        "🔋",
        "🔄",
        "empty"
      ]
    },
    {
      "ingles": "Binary Numbers",
      "espanol": "Números Binarios",
      "image": [
        "empty",
        "🔢",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Selector",
      "espanol": "Selector",
      "image": [
        "empty",
        "empty",
        "🔍",
        "📜"
      ]
    },
    {
      "ingles": "Link",
      "espanol": "Enlace",
      "image": [
        "📱",
        "empty",
        "🔗",
        "empty"
      ]
    },
    {
      "ingles": "Get",
      "espanol": "Obtener",
      "image": [
        "💁",
        "empty",
        "📦",
        "empty"
      ]
    },
    {
      "ingles": "Obtain",
      "espanol": "Obtener",
      "image": [
        "empty",
        "🎁",
        "empty",
        "👐"
      ]
    },
    {
      "ingles": "Ways",
      "espanol": "Maneras",
      "image": [
        "💳",
        "💴",
        "💵",
        "👐"
      ]
    },
    {
      "ingles": "Appropriate",
      "espanol": "Adecuado",
      "image": [
        "👌"
      ]
    },
    {
      "ingles": "Review",
      "espanol": "Revisar",
      "image": [
        "🔎",
        "📰",
        "👀"
      ]
    },
    {
      "ingles": "Promise",
      "espanol": "Prometer",
      "image": [
        "🤞"
      ]
    },
    {
      "ingles": "Index",
      "espanol": "Índice",
      "image": [
        "📑",
        "📌",
        "🔍"
      ]
    },
    {
      "ingles": "Fragment",
      "espanol": "Fragmento",
      "image": [
        "🧩",
        "empty",
        "🧩",
        "empty",
        "💻"
      ]
    },
    {
      "ingles": "Applications",
      "espanol": "Aplicaciones",
      "image": [
        "📱"
      ]
    },
    {
      "ingles": "Class",
      "espanol": "Clase",
      "image": [
        "💼",
        "empty",
        "🗒",
        "empty",
        "👱"
      ]
    },
    {
      "ingles": "Copy",
      "espanol": "Copiar",
      "image": [
        "empty",
        "📰",
        "📝",
        "empty"
      ]
    },
    {
      "ingles": "Identation",
      "espanol": "Identacion",
      "image": [
        "👩‍💻",
        "📑",
        "🔎"
      ]
    },
    {
      "ingles": "Function",
      "espanol": "Funcion",
      "image": [
        "💻",
        "🔩",
        "✅"
      ]
    },
    {
      "ingles": "Modifiers",
      "espanol": "Modificadores",
      "image": [
        "empty",
        "empty",
        "👩‍💻",
        "⚙️"
      ]
    },
    {
      "ingles": "Type",
      "espanol": "Tipo",
      "image": [
        "📚",
        "",
        "🧬"
      ]
    },
    {
      "ingles": "Primary key",
      "espanol": "Clave primaria",
      "image": [
        "🔑"
      ]
    },
    {
      "ingles": "Storage",
      "espanol": "Almacenamiento",
      "image": [
        "empty",
        "💽",
        "📂",
        "empty"
      ]
    },
    {
      "ingles": "Extensions",
      "espanol": "Extenciones",
      "image": [
        "empty",
        "empty",
        "🔗",
        "🔌"
      ]
    },
    {
      "ingles": "Connection",
      "espanol": "Conexion",
      "image": [
        "🔌"
      ]
    },
    {
      "ingles": "screen",
      "espanol": "Pantalla",
      "image": [
        "🖥️"
      ]
    },
    {
      "ingles": "Program",
      "espanol": "Programa",
      "image": [
        "💻",
        "👩‍💻",
        "📱"
      ]
    },
    {
      "ingles": "Callback",
      "espanol": "Retro llamada",
      "image": [
        "📳"
      ]
    },
    {
      "ingles": "payload",
      "espanol": "Carga Util",
      "image": [
        "🔋"
      ]
    },
    {
      "ingles": "Memoization",
      "espanol": "Memorización",
      "image": [
        "🧠"
      ]
    },
    {
      "ingles": "Streaming",
      "espanol": "transmisión",
      "image": [
        "📺",
        "empty",
        "📡"
      ]
    }
  ]
  ngOnInit(): void {
    // Cargar la api y llenas el array
    for (let i = 0; i < 12; i++) {
      this.elemntGame.push(this.words[i])
    }
  }
  ngAfterViewinit(){
    this.containerEmojis = document.querySelectorAll(".containerEmoji")
    console.log(this.containerEmojis)
    const emojiNoEmpty: any[] = [];
    let emojiChilds: any[];
    let count = 0;
    let count2 = 0;
    let  elementNoEmpty: any[] = [];
    this.containerEmojis.forEach((element: HTMLElement) => {
      count = element.childElementCount;
     
      count2 = 0;
      emojiChilds = [];
  
      element.childNodes.forEach((x: Node) => {
        if (x instanceof HTMLElement && x.tagName === 'PRE') {
          emojiChilds.push(x);
        }
      });
      switch (count) {
        case 1:
          emojiChilds.forEach((element: HTMLElement) => {
            if (elementContent(element)) {
              element.style.transform = 'scale(2)';
              element.style.left = '30%';
              element.style.top = '15%';
            }
          });
          break;
        case 2:
          emojiChilds.forEach((element: HTMLElement) => {
            if (elementContent(element)) {
              element.style.left = '15%';
              element.style.top = '30%';
              element.style.transform = 'scale(1.5)';
            }
            emptyEmoji(element);
          });
          break;
        case 3:
          emojiChilds.forEach((element: HTMLElement) => {
            if (elementContent(element)) {
              element.style.top = '25%';
              element.style.transform = 'scale(1.2)';
              emptyEmoji(element);
            }
          });
          break;
        case 4:
          emojiChilds.forEach((element: HTMLElement) => {
            if (elementContent(element)) {
              element.style.top = '20%';
              element.style.transform = 'scale(1)';
            }
            emptyEmoji(element);
          });
          break;
        case 5:
          emojiChilds.forEach((element: HTMLElement) => {
            if (elementContent(element)) {
              element.style.top = '20%';
              element.style.transform = 'scale(1)';
            }
            emptyEmoji(element);
          });
          break;
        default:
          // Handle other cases if needed
          break;
      }
    });
    function elementContent(element: HTMLElement): boolean {
      if(element.textContent != ""){
        return true
      }else{
        return false
      }
    }
    
    function emptyEmoji(element: HTMLElement) {
      if(elementContent(element)){
        emojiNoEmpty.push(1)
      }else{
       emojiNoEmpty.push(0)
      }
      elementNoEmpty.push(element)
      count2 ++ 
      try {
        if(emojiChilds.length == count2){
          if(count2 == 2){// [0, 1], 
            //elementNoEmpty[0].style.filter ="drop-shadow(.4vh 0vh .2vh black)"
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1){
              // [0, 1]
              elementNoEmpty[1].style.top = "45%"
              elementNoEmpty[1].style.left = "5%"
              elementNoEmpty[1].style.scale = "2"
              elementNoEmpty[1].style.rotate = "45deg"
            }
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 0){
              //[1, 0]
              elementNoEmpty[0].style.top = "15%"
              elementNoEmpty[0].style.left = "25%"
              elementNoEmpty[0].style.scale ="2"
              elementNoEmpty[0].style.rotate = "-45deg"
            }
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 1){
              //[1, 1]
              elementNoEmpty[0].style.filter ="drop-shadow( 0.4vh -0.2vh .2vh black)"
            }
          }
          if(count2 == 3){ 
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 1){
              // [1,0,1]
              elementNoEmpty[0].style.left = "8%"
              elementNoEmpty[2].style.right = "8%"
              elementNoEmpty[0].style.top = "20%"
              elementNoEmpty[2].style.top = "20%"
              elementNoEmpty[0].style.scale = "1.5"
              elementNoEmpty[0].style.filter ="drop-shadow(.4vh 0vh .2vh black)"
              elementNoEmpty[2].style.scale = "1.5"
              elementNoEmpty[2].style.zIndex = "1"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1 && emojiNoEmpty[2] == 1){
              //[0, 1, 1]
              elementNoEmpty[1].style.top = "30%"
              elementNoEmpty[1].style.scale = "1.5"
              elementNoEmpty[1].style.right ="15%"
              elementNoEmpty[1].style.zIndex ="2"
              elementNoEmpty[2].style.zIndex ="3"
              elementNoEmpty[2].style.top = "30%"
              elementNoEmpty[2].style.scale = "1.5"
              elementNoEmpty[2].style.right ="15%"
              elementNoEmpty[2].style.filter ="drop-shadow(-0.2vh -0.2vh .2vh black)"
            }
          }
          if(count2 == 4){
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 1 && emojiNoEmpty[3] == 0){
              // [1, 0, 1, 0]
              elementNoEmpty[0].style.left = "8%"
              elementNoEmpty[2].style.right = "8%"
              elementNoEmpty[0].style.scale = "1.5"
              elementNoEmpty[0].style.top = "20%"
              elementNoEmpty[2].style.top = "20%"
              elementNoEmpty[0].style.filter ="drop-shadow(.4vh 0vh .2vh black)"
              elementNoEmpty[2].style.scale = "1.5"
              elementNoEmpty[2].style.zIndex = "1"
            }
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 0 && emojiNoEmpty[3] == 1){
              // [1, 0, 0, 1]
              elementNoEmpty[0].style.top = "5%"
              elementNoEmpty[0].style.scale = "1.5"
              elementNoEmpty[0].style.left ="15%"
              elementNoEmpty[3].style.zIndex ="4"
              elementNoEmpty[3].style.top = "5%"
              elementNoEmpty[3].style.scale = "1.5"
              elementNoEmpty[3].style.left ="15%"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1 && emojiNoEmpty[2] == 1 && emojiNoEmpty[3] == 0){
              console.log("count2 == 4-3")
              //[0, 1, 1, 0]
              elementNoEmpty[1].style.top = "30%"
              elementNoEmpty[1].style.scale = "1.5"
              elementNoEmpty[1].style.right ="15%"
              elementNoEmpty[1].style.zIndex ="6"
              elementNoEmpty[2].style.top = "30%"
              elementNoEmpty[2].style.scale = "1.5"
              elementNoEmpty[2].style.right ="15%"
              elementNoEmpty[1].style.filter ="drop-shadow(.2vh .2vh .2vh black)"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 1 && emojiNoEmpty[3] == 1){
              //[0, 0, 1, 1]
              elementNoEmpty[2].style.top = "1%"
              elementNoEmpty[2].style.scale = "1.5"
              elementNoEmpty[2].style.right ="15%"
              elementNoEmpty[3].style.zIndex ="4"
              elementNoEmpty[3].style.top = "5%"
              elementNoEmpty[3].style.scale = "1.5"
              elementNoEmpty[3].style.right ="15%"
              elementNoEmpty[2].style.filter ="drop-shadow(-.2vh .2vh .2vh black)"
            }
            if(emojiNoEmpty[0] == 1 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 1 && emojiNoEmpty[3] == 1){
              //[1, 0, 1, 1]
              elementNoEmpty[0].style.top = "1%"
              elementNoEmpty[0].style.scale = "1.2"
              elementNoEmpty[0].style.left ="0%"
              elementNoEmpty[0].style.top = "5%"
              elementNoEmpty[2].style.top = "5%"
              elementNoEmpty[2].style.scale = "1.2"
              elementNoEmpty[2].style.right ="5%"
              elementNoEmpty[3].style.scale = "1.2"
              elementNoEmpty[3].style.filter ="drop-shadow(-.2vh .2vh .2vh black)"
            }
    
          }else if(count2 == 5){//  [0, 1, 1, 0, 1]
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 0 && emojiNoEmpty[3] == 1 && emojiNoEmpty[4] == 1){
              // [0, 0, 0, 1, 1]
              elementNoEmpty[3].style.top = "7%"
              elementNoEmpty[4].style.top = "1%"
              elementNoEmpty[4].style.filter ="drop-shadow(0vh .4vh .2vh black)"
              elementNoEmpty[3].style.scale = "1.5"
              elementNoEmpty[4].style.scale = "1.5"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1 && emojiNoEmpty[2] == 0 && emojiNoEmpty[3] == 0 && emojiNoEmpty[4] == 1){
              // [0, 1, 0, 0, 1]
              elementNoEmpty[1].style.top = "30%"
              elementNoEmpty[4].style.top = "30%"
              elementNoEmpty[1].style.scale = "1.5"
              elementNoEmpty[4].style.scale = "1.5"
              elementNoEmpty[4].style.filter ="drop-shadow(0vh -.4vh .2vh black)"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1 && emojiNoEmpty[2] == 0 && emojiNoEmpty[3] == 1 && emojiNoEmpty[4] == 1){
              // [0, 1, 0, 1, 1]
              elementNoEmpty[1].style.top = "20%"
              elementNoEmpty[3].style.top = "20%"
              elementNoEmpty[4].style.top = "20%"
              elementNoEmpty[4].style.filter ="drop-shadow(0vh -.4vh .2vh black)"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 0 && emojiNoEmpty[2] == 0 && emojiNoEmpty[3] == 0 && emojiNoEmpty[4] == 1){
              // [0, 0, 0, 0, 1]
              elementNoEmpty[4].style.top = "20%"
              elementNoEmpty[4].style.scale = "2"
              elementNoEmpty[4].style.rotate = "180deg"
              elementNoEmpty[4].style.filter ="drop-shadow(0vh -.4vh .2vh black)"
            }
            if(emojiNoEmpty[0] == 0 && emojiNoEmpty[1] == 1 && emojiNoEmpty[2] == 1 && emojiNoEmpty[3] == 0 && emojiNoEmpty[4] == 1){
              // [0, 1, 1, 0, 1]
              elementNoEmpty[4].parent.rotate = "180deg"
    
            }
          }    
        }
    
      } catch (error) {}
      
    }
  }


}
