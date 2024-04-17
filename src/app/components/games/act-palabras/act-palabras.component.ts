import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act-palabras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './act-palabras.component.html',
  styleUrl: './act-palabras.component.css'
})
export class ActPalabrasComponent implements OnInit {
  containerEmojis?: NodeListOf<HTMLDivElement>
  elemntGame: any = []
  words:any [] =[
    {
      "ingles": "Loop",
      "español": "Bucle",
      "image": [
        "🔁"
      ]
    },
    {
      "ingles": "Break",
      "español": "Romper",
      "image": [
        "⛓️",
        "empty",
        "💥"
      ]
    },
    {
      "ingles": "Code",
      "español": "Codigo",
      "image": [
        "🤚",
        "💻"
      ]
    },
    {
      "ingles": "Array",
      "español": "Coleccion",
      "image": [
        "📝"
      ]
    },
    {
      "ingles": "Object",
      "español": "Objecto",
      "image": [
        "🌟"
      ]
    },
    {
      "ingles": "Argument",
      "español": "Argumento",
      "image": [
        "🗣",
        "📑"
      ]
    },
    {
      "ingles": "Database",
      "español": "Base de datos",
      "image": [
        "🗄"
      ]
    },
    {
      "ingles": "Conditional",
      "español": "Condicional",
      "image": [
        "❓",
        "empty",
        "❗"
      ]
    },
    {
      "ingles": "Inheritance",
      "español": "Herencia",
      "image": [
        "👱",
        "empty",
        "empty",
        "🧬"
      ]
    },
    {
      "ingles": "Syntax",
      "español": "Sintaxis",
      "image": [
        "🔢",
        "empty",
        "🔠",
        "#️⃣"
      ]
    },
    {
      "ingles": "Style",
      "español": "Estilo",
      "image": [
        "👔"
      ]
    },
    {
      "ingles": "Component",
      "español": "Componentes",
      "image": [
        "🧩",
        "empty",
        "empty",
        "📁"
      ]
    },
    {
      "ingles": "Generate",
      "español": "Generar",
      "image": [
        "🖱️",
        "📄"
      ]
    },
    {
      "ingles": "Run",
      "español": "Correr",
      "image": [
        "🏃"
      ]
    },
    {
      "ingles": "Save",
      "español": "Salvar",
      "image": [
        "💾"
      ]
    },
    {
      "ingles": "While",
      "español": "Mientras",
      "image": [
        "🔃"
      ]
    },
    {
      "ingles": "For",
      "español": "Para",
      "image": [
        "🔄"
      ]
    },
    {
      "ingles": "Developer",
      "español": "Desarrollador",
      "image": [
        "👨‍💻"
      ]
    },
    {
      "ingles": "Return",
      "español": "Retornar",
      "image": [
        "↩️"
      ]
    },
    {
      "ingles": "Implement",
      "español": "Implementar",
      "image": [
        "🖥️",
        "empty",
        "empty",
        "🔛"
      ]
    },
    {
      "ingles": "Concatenate",
      "español": "Concatenar",
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
      "español": "Importar",
      "image": [
        "📥"
      ]
    },
    {
      "ingles": "Build",
      "español": "construcción",
      "image": [
        "🏗️"
      ]
    },
    {
      "ingles": "Commit",
      "español": "Comprometerse",
      "image": [
        "📤",
        "📩"
      ]
    },
    {
      "ingles": "Encapsulation",
      "español": "Encapsulamiento",
      "image": [
        "💊"
      ]
    },
    {
      "ingles": "Polymorphism",
      "español": "Polimorfismo",
      "image": [
        "📂",
        "📁"
      ]
    },
    {
      "ingles": "Container",
      "español": "Contenedor",
      "image": [
        "📦"
      ]
    },
    {
      "ingles": "Debugging",
      "español": "Depuracion",
      "image": [
        "🔍",
        "✔️"
      ]
    },
    {
      "ingles": "Namespace",
      "español": "Espacio de Nombres",
      "image": [
        "🗒",
        "🔡"
      ]
    },
    {
      "ingles": "right",
      "español": "Derecha",
      "image": [
        "➡️"
      ]
    },
    {
      "ingles": "Top",
      "español": "Abajo",
      "image": [
        "⬆️"
      ]
    },
    {
      "ingles": "Bottom",
      "español": "Arriba",
      "image": [
        "⬇️"
      ]
    },
    {
      "ingles": "Justify",
      "español": "justificar",
      "image": [
        "📏"
      ]
    },
    {
      "ingles": "left",
      "español": "Izquierda",
      "image": [
        "➡️"
      ]
    },
    {
      "ingles": "Label",
      "español": "Etiqueta",
      "image": [
        "🏷️"
      ]
    },
    {
      "ingles": "Delete",
      "español": "Borrar",
      "image": [
        "🗑️"
      ]
    },
    {
      "ingles": "Abstraction",
      "español": "Abstraccion",
      "image": [
        "empty",
        "📗",
        "📚",
        "empty"
      ]
    },
    {
      "ingles": "Concurrency",
      "español": "Concurrencia",
      "image": [
        "👨‍💻",
        "empty",
        "🛢"
      ]
    },
    {
      "ingles": "Parallelism",
      "español": "Paralelismo",
      "image": [
        "🔀"
      ]
    },
    {
      "ingles": "Bug",
      "español": "Fallo",
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
      "español": "Datos",
      "image": [
        "empty",
        "📓",
        "📜",
        "empty"
      ]
    },
    {
      "ingles": "Services",
      "español": "Servicios",
      "image": [
        "empty",
        "empty",
        "🛠",
        "💼"
      ]
    },
    {
      "ingles": "Injectable",
      "español": "Inyectable",
      "image": [
        "💉"
      ]
    },
    {
      "ingles": "Export",
      "español": "Exportar",
      "image": [
        "empty",
        "📤",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Routes",
      "español": "Rutas",
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
      "español": "Importar",
      "image": [
        "empty",
        "📥",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Loading",
      "español": "Cargando",
      "image": [
        "empty",
        "🔋",
        "🔄",
        "empty"
      ]
    },
    {
      "ingles": "Binary Numbers",
      "español": "Números Binarios",
      "image": [
        "empty",
        "🔢",
        "💻",
        "empty"
      ]
    },
    {
      "ingles": "Selector",
      "español": "Selector",
      "image": [
        "empty",
        "empty",
        "🔍",
        "📜"
      ]
    },
    {
      "ingles": "Link",
      "español": "Enlace",
      "image": [
        "📱",
        "empty",
        "🔗",
        "empty"
      ]
    },
    {
      "ingles": "Get",
      "español": "Obtener",
      "image": [
        "💁",
        "empty",
        "📦",
        "empty"
      ]
    },
    {
      "ingles": "Obtain",
      "español": "Obtener",
      "image": [
        "empty",
        "🎁",
        "empty",
        "👐"
      ]
    },
    {
      "ingles": "Ways",
      "español": "Maneras",
      "image": [
        "💳",
        "💴",
        "💵",
        "👐"
      ]
    },
    {
      "ingles": "Appropriate",
      "español": "Adecuado",
      "image": [
        "👌"
      ]
    },
    {
      "ingles": "Review",
      "español": "Revisar",
      "image": [
        "🔎",
        "📰",
        "👀"
      ]
    },
    {
      "ingles": "Promise",
      "español": "Prometer",
      "image": [
        "🤞"
      ]
    },
    {
      "ingles": "Index",
      "español": "Índice",
      "image": [
        "📑",
        "📌",
        "🔍"
      ]
    },
    {
      "ingles": "Fragment",
      "español": "Fragmento",
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
      "español": "Aplicaciones",
      "image": [
        "📱"
      ]
    },
    {
      "ingles": "Class",
      "español": "Clase",
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
      "español": "Copiar",
      "image": [
        "empty",
        "📰",
        "📝",
        "empty"
      ]
    },
    {
      "ingles": "Identation",
      "español": "Identacion",
      "image": [
        "👩‍💻",
        "📑",
        "🔎"
      ]
    },
    {
      "ingles": "Function",
      "español": "Funcion",
      "image": [
        "💻",
        "🔩",
        "✅"
      ]
    },
    {
      "ingles": "Modifiers",
      "español": "Modificadores",
      "image": [
        "empty",
        "empty",
        "👩‍💻",
        "⚙️"
      ]
    },
    {
      "ingles": "Type",
      "español": "Tipo",
      "image": [
        "📚",
        "",
        "🧬"
      ]
    },
    {
      "ingles": "Primary key",
      "español": "Clave primaria",
      "image": [
        "🔑"
      ]
    },
    {
      "ingles": "Storage",
      "español": "Almacenamiento",
      "image": [
        "empty",
        "💽",
        "📂",
        "empty"
      ]
    },
    {
      "ingles": "Extensions",
      "español": "Extenciones",
      "image": [
        "empty",
        "empty",
        "🔗",
        "🔌"
      ]
    },
    {
      "ingles": "Connection",
      "español": "Conexion",
      "image": [
        "🔌"
      ]
    },
    {
      "ingles": "screen",
      "español": "Pantalla",
      "image": [
        "🖥️"
      ]
    },
    {
      "ingles": "Program",
      "español": "Programa",
      "image": [
        "💻",
        "👩‍💻",
        "📱"
      ]
    },
    {
      "ingles": "Callback",
      "español": "Retro llamada",
      "image": [
        "📳"
      ]
    },
    {
      "ingles": "payload",
      "español": "Carga Util",
      "image": [
        "🔋"
      ]
    },
    {
      "ingles": "Memoization",
      "español": "Memorización",
      "image": [
        "🧠"
      ]
    },
    {
      "ingles": "Streaming",
      "español": "transmisión",
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
