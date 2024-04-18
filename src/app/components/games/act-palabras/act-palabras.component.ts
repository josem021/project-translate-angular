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
       this.containerEmojis.forEach(element => {
        
       });
  }


}
