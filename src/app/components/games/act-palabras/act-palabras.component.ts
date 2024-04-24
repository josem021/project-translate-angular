import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarSkyComponent } from '../../star-sky/star-sky.component';
// import { JsonService } from '../../json/json.service';
@Component({
  selector: 'app-act-palabras',
  standalone: true,
  imports: [CommonModule, StarSkyComponent],
  templateUrl: './act-palabras.component.html',
  styleUrl: './act-palabras.component.css'
})
export class ActPalabrasComponent {

    constructor() {
      this.mezclar(this.imagenes);
      this.mezclar(this.cartas);
      this.acierto = 0;
      this.movimiento = 0;
    }
    element:any=[]
    ngOnInit(): void {
      for (let i = 0; i < 12; i++) {
        this.element.push( this.imagenes[i].image);
      }
      console.log(this.element)
    }

    acierto = 0;
    message=false
    movimiento = 0;
    imagenes = [ {
      "ingles": "Loop",
      "español": "Bucle",
      "image": "🔁"
      
    },
    {
      "ingles": "Break",
      "español": "Romper",
      "image":  "💥"
      
    },
    {
      "ingles": "Code",
      "español": "Codigo",
      "image": 
        "💻"

    },
    {
      "ingles": "Array",
      "español": "Coleccion",
      "image": 
        "📝"
      
    },
    {
      "ingles": "Object",
      "español": "Objecto",
      "image": 
        "🌟"
      
    },
    {
      "ingles": "Argument",
      "español": "Argumento",
      "image": 
        "📑"
  
    },
    {
      "ingles": "Database",
      "español": "Base de datos",
      "image": 
        "🗄"
      
    },
    {
      "ingles": "Conditional",
      "español": "Condicional",
      "image": 
        "❗"
      
    },
    {
      "ingles": "Inheritance",
      "español": "Herencia",
      "image": 
        "👱"
    },
    {
      "ingles": "Syntax",
      "español": "Sintaxis",
      "image": 
        "🔢"

    },
    {
      "ingles": "Style",
      "español": "Estilo",
      "image": 
        "👔"
      
    },
    {
      "ingles": "Component",
      "español": "Componentes",
      "image": 
        "🧩"

    },
    {
      "ingles": "Generate",
      "español": "Generar",
      "image":"📄"
      
    },
    {
      "ingles": "Run",
      "español": "Correr",
      "image": 
        "🏃"
    },
    {
      "ingles": "Save",
      "español": "Salvar",
      "image": 
        "💾"
      
    },
    {
      "ingles": "While",
      "español": "Mientras",
      "image": 
        "🔃"
      
    },
    {
      "ingles": "For",
      "español": "Para",
      "image": 
        "🔄"
      
    },
    {
      "ingles": "Developer",
      "español": "Desarrollador",
      "image": 
        "👨‍💻"
      
    },
    {
      "ingles": "Return",
      "español": "Retornar",
      "image": 
        "↩️"
      
    },
    {
      "ingles": "Implement",
      "español": "Implementar",
      "image": 
        
        "🔛"
      
    },
    {
      "ingles": "Concatenate",
      "español": "Concatenar",
      "image": 
        "🅰️",
    },
    {
      "ingles": "Import",
      "español": "Importar",
      "image": 
        "📥"
      
    },
    {
      "ingles": "Build",
      "español": "construcción",
      "image": 
        "🏗️"
      
    },
    {
      "ingles": "Commit",
      "español": "Comprometerse",
      "image": 
        "📩"
      
    },
    {
      "ingles": "Encapsulation",
      "español": "Encapsulamiento",
      "image": 
        "💊"
      
    },
    {
      "ingles": "Polymorphism",
      "español": "Polimorfismo",
      "image": 
        "📁"
      
    }
    // {
    //   "ingles": "Container",
    //   "español": "Contenedor",
    //   "image": [
    //     "📦"
    //   ]
    // },
    // {
    //   "ingles": "Debugging",
    //   "español": "Depuracion",
    //   "image": [
    //     "🔍",
    //     "✔️"
    //   ]
    // },
    // {
    //   "ingles": "Namespace",
    //   "español": "Espacio de Nombres",
    //   "image": [
    //     "🗒",
    //     "🔡"
    //   ]
    // },
    // {
    //   "ingles": "right",
    //   "español": "Derecha",
    //   "image": [
    //     "➡️"
    //   ]
    // },
    // {
    //   "ingles": "Top",
    //   "español": "Abajo",
    //   "image": [
    //     "⬆️"
    //   ]
    // },
    // {
    //   "ingles": "Bottom",
    //   "español": "Arriba",
    //   "image": [
    //     "⬇️"
    //   ]
    // },
    // {
    //   "ingles": "Justify",
    //   "español": "justificar",
    //   "image": [
    //     "📏"
    //   ]
    // },
    // {
    //   "ingles": "left",
    //   "español": "Izquierda",
    //   "image": [
    //     "➡️"
    //   ]
    // },
    // {
    //   "ingles": "Label",
    //   "español": "Etiqueta",
    //   "image": [
    //     "🏷️"
    //   ]
    // },
    // {
    //   "ingles": "Delete",
    //   "español": "Borrar",
    //   "image": [
    //     "🗑️"
    //   ]
    // },
    // {
    //   "ingles": "Abstraction",
    //   "español": "Abstraccion",
    //   "image": [
    //     "empty",
    //     "📗",
    //     "📚",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Concurrency",
    //   "español": "Concurrencia",
    //   "image": [
    //     "👨‍💻",
    //     "empty",
    //     "🛢"
    //   ]
    // },
    // {
    //   "ingles": "Parallelism",
    //   "español": "Paralelismo",
    //   "image": [
    //     "🔀"
    //   ]
    // },
    // {
    //   "ingles": "Bug",
    //   "español": "Fallo",
    //   "image": [
    //     "🚫",
    //     "empty",
    //     "🔌",
    //     "empty",
    //     "🤦"
    //   ]
    // },
    // {
    //   "ingles": "Data",
    //   "español": "Datos",
    //   "image": [
    //     "empty",
    //     "📓",
    //     "📜",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Services",
    //   "español": "Servicios",
    //   "image": [
    //     "empty",
    //     "empty",
    //     "🛠",
    //     "💼"
    //   ]
    // },
    // {
    //   "ingles": "Injectable",
    //   "español": "Inyectable",
    //   "image": [
    //     "💉"
    //   ]
    // },
    // {
    //   "ingles": "Export",
    //   "español": "Exportar",
    //   "image": [
    //     "empty",
    //     "📤",
    //     "💻",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Routes",
    //   "español": "Rutas",
    //   "image": [
    //     "🌎",
    //     "empty",
    //     "🗺️",
    //     "empty",
    //     "🚶"
    //   ]
    // },
    // {
    //   "ingles": "Import",
    //   "español": "Importar",
    //   "image": [
    //     "empty",
    //     "📥",
    //     "💻",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Loading",
    //   "español": "Cargando",
    //   "image": [
    //     "empty",
    //     "🔋",
    //     "🔄",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Binary Numbers",
    //   "español": "Números Binarios",
    //   "image": [
    //     "empty",
    //     "🔢",
    //     "💻",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Selector",
    //   "español": "Selector",
    //   "image": [
    //     "empty",
    //     "empty",
    //     "🔍",
    //     "📜"
    //   ]
    // },
    // {
    //   "ingles": "Link",
    //   "español": "Enlace",
    //   "image": [
    //     "📱",
    //     "empty",
    //     "🔗",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Get",
    //   "español": "Obtener",
    //   "image": [
    //     "💁",
    //     "empty",
    //     "📦",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Obtain",
    //   "español": "Obtener",
    //   "image": [
    //     "empty",
    //     "🎁",
    //     "empty",
    //     "👐"
    //   ]
    // },
    // {
    //   "ingles": "Ways",
    //   "español": "Maneras",
    //   "image": [
    //     "💳",
    //     "💴",
    //     "💵",
    //     "👐"
    //   ]
    // },
    // {
    //   "ingles": "Appropriate",
    //   "español": "Adecuado",
    //   "image": [
    //     "👌"
    //   ]
    // },
    // {
    //   "ingles": "Review",
    //   "español": "Revisar",
    //   "image": [
    //     "🔎",
    //     "📰",
    //     "👀"
    //   ]
    // },
    // {
    //   "ingles": "Promise",
    //   "español": "Prometer",
    //   "image": [
    //     "🤞"
    //   ]
    // },
    // {
    //   "ingles": "Index",
    //   "español": "Índice",
    //   "image": [
    //     "📑",
    //     "📌",
    //     "🔍"
    //   ]
    // },
    // {
    //   "ingles": "Fragment",
    //   "español": "Fragmento",
    //   "image": [
    //     "🧩",
    //     "empty",
    //     "🧩",
    //     "empty",
    //     "💻"
    //   ]
    // },
    // {
    //   "ingles": "Applications",
    //   "español": "Aplicaciones",
    //   "image": [
    //     "📱"
    //   ]
    // },
    // {
    //   "ingles": "Class",
    //   "español": "Clase",
    //   "image": [
    //     "💼",
    //     "empty",
    //     "🗒",
    //     "empty",
    //     "👱"
    //   ]
    // },
    // {
    //   "ingles": "Copy",
    //   "español": "Copiar",
    //   "image": [
    //     "empty",
    //     "📰",
    //     "📝",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Identation",
    //   "español": "Identacion",
    //   "image": [
    //     "👩‍💻",
    //     "📑",
    //     "🔎"
    //   ]
    // },
    // {
    //   "ingles": "Function",
    //   "español": "Funcion",
    //   "image": [
    //     "💻",
    //     "🔩",
    //     "✅"
    //   ]
    // },
    // {
    //   "ingles": "Modifiers",
    //   "español": "Modificadores",
    //   "image": [
    //     "empty",
    //     "empty",
    //     "👩‍💻",
    //     "⚙️"
    //   ]
    // },
    // {
    //   "ingles": "Type",
    //   "español": "Tipo",
    //   "image": [
    //     "📚",
    //     "",
    //     "🧬"
    //   ]
    // },
    // {
    //   "ingles": "Primary key",
    //   "español": "Clave primaria",
    //   "image": [
    //     "🔑"
    //   ]
    // },
    // {
    //   "ingles": "Storage",
    //   "español": "Almacenamiento",
    //   "image": [
    //     "empty",
    //     "💽",
    //     "📂",
    //     "empty"
    //   ]
    // },
    // {
    //   "ingles": "Extensions",
    //   "español": "Extenciones",
    //   "image": [
    //     "empty",
    //     "empty",
    //     "🔗",
    //     "🔌"
    //   ]
    // },
    // {
    //   "ingles": "Connection",
    //   "español": "Conexion",
    //   "image": [
    //     "🔌"
    //   ]
    // },
    // {
    //   "ingles": "screen",
    //   "español": "Pantalla",
    //   "image": [
    //     "🖥️"
    //   ]
    // },
    // {
    //   "ingles": "Program",
    //   "español": "Programa",
    //   "image": [
    //     "💻",
    //     "👩‍💻",
    //     "📱"
    //   ]
    // },
    // {
    //   "ingles": "Callback",
    //   "español": "Retro llamada",
    //   "image": [
    //     "📳"
    //   ]
    // },
    // {
    //   "ingles": "payload",
    //   "español": "Carga Util",
    //   "image": [
    //     "🔋"
    //   ]
    // },
    // {
    //   "ingles": "Memoization",
    //   "español": "Memorización",
    //   "image": [
    //     "🧠"
    //   ]
    // },
    // {
    //   "ingles": "Streaming",
    //   "español": "transmisión",
    //   "image": [
    //     "📺",
    //     "empty",
    //     "📡"
    //   ]
    // },
    //   {
    //     "ingles": "Loop",
    //     "español": "Bucle",
    //     "image": [
    //       "🔁"
    //     ]
    //   },
    //   {
    //     "ingles": "Break",
    //     "español": "Romper",
    //     "image": [
    //       "⛓️",
    //       "empty",
    //       "💥"
    //     ]
    //   },
    //   {
    //     "ingles": "Code",
    //     "español": "Codigo",
    //     "image": [
    //       "🤚",
    //       "💻"
    //     ]
    //   },
    //   {
    //     "ingles": "Array",
    //     "español": "Coleccion",
    //     "image": [
    //       "📝"
    //     ]
    //   },
    //   {
    //     "ingles": "Object",
    //     "español": "Objecto",
    //     "image": [
    //       "🌟"
    //     ]
    //   },
    //   {
    //     "ingles": "Argument",
    //     "español": "Argumento",
    //     "image": [
    //       "🗣",
    //       "📑"
    //     ]
    //   },
    //   {
    //     "ingles": "Database",
    //     "español": "Base de datos",
    //     "image": [
    //       "🗄"
    //     ]
    //   },
    //   {
    //     "ingles": "Conditional",
    //     "español": "Condicional",
    //     "image": [
    //       "❓",
    //       "empty",
    //       "❗"
    //     ]
    //   },
    //   {
    //     "ingles": "Inheritance",
    //     "español": "Herencia",
    //     "image": [
    //       "👱",
    //       "empty",
    //       "empty",
    //       "🧬"
    //     ]
    //   },
    //   {
    //     "ingles": "Syntax",
    //     "español": "Sintaxis",
    //     "image": [
    //       "🔢",
    //       "empty",
    //       "🔠",
    //       "#️⃣"
    //     ]
    //   },
    //   {
    //     "ingles": "Style",
    //     "español": "Estilo",
    //     "image": [
    //       "👔"
    //     ]
    //   },
      // Agrega más imágenes aquí
    ];

    cartas: any[] = [];
    iniciaJuego: boolean = false;
    últimoIndiceVolteado: number = -1;
    aciertos: number = 0;
    movimientos: number = 0;

    iniciarJuego() {
      this.iniciaJuego = true;
      this.crearCartas();
      this.mezclar(this.cartas);
    }

    crearCartas() {
      this.cartas = [];
        this.imagenes.slice(0, 8).forEach((imagen, index) => {
        this.cartas.push({ nombreIngles: imagen.ingles, nombreEspanol:imagen.ingles, urlDeImagen: imagen.image, volteada: false, emparejada: false });
        this.cartas.push({ nombreIngles: imagen.ingles, nombreEspanol:imagen.español, urlDeImagen: imagen.image, volteada: false, emparejada: false });
      });
      console.log(this.cartas)
    }
    ReiniciarJuego(){
      window.location.reload();
    }

    mezclar(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    voltearCarta(indice: number) {
      if (!this.iniciaJuego) return;

      const carta = this.cartas[indice];
      if (!carta.volteada && this.últimoIndiceVolteado !== indice) {
        carta.volteada = true;

        if (this.últimoIndiceVolteado !== -1) {
          const cartaAnterior = this.cartas[this.últimoIndiceVolteado];
          if (cartaAnterior.nombreIngles === carta.nombreIngles) {
            cartaAnterior.emparejada = true;
            carta.emparejada = true;
            this.aciertos++;

            if(this.aciertos===8){
              this.message=true
            }
          } else {
            setTimeout(() => {
              cartaAnterior.volteada = false;
              carta.volteada = false;
            }, 1000);
          }
          this.movimientos++;
          this.últimoIndiceVolteado = -1;
        } else {
          this.últimoIndiceVolteado = indice;
        }
      }
    }
  }
