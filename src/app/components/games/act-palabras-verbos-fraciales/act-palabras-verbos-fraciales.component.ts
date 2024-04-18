import { Component } from '@angular/core';
import { BtnHomeComponent } from '../../btn-home/btn-home.component';
import { StarSkyComponent } from "../../star-sky/star-sky.component";

@Component({
    selector: 'app-act-palabras-verbos-fraciales',
    standalone: true,
    templateUrl: './act-palabras-verbos-fraciales.component.html',
    styleUrl: './act-palabras-verbos-fraciales.component.css',
    imports: [BtnHomeComponent, StarSkyComponent]
})
export class ActPalabrasVerbosFracialesComponent {
  containerEmojis?: NodeListOf<HTMLDivElement>
  emojiNoEmpty: Array<number> = []
 
  emojiChilds: Array<number>=[]
  count = 0
  count2 = 0
  words: any = [
    {
      "palabras": [
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
      ],
      "Acronimos":[
        {
          "abreviacion":"API",
          "ingles":"Application Programming Interface",
          "espanol":"Interfaz de programación de aplicaciones",
          "palabras":["Application","Programming","Interface"],
          "test":[["Algorithm","Application","array"],["Protocol","Programming","Proxy"],["Interface","Inheritance","Index"]]
          },
          {
            "abreviacion":"APK",
            "ingles":"Android Application Package",
            "espanol":"Paquete de aplicaciones de Android",
            "palabras": ["Android","Application","Package"],
            "test":[["agile","Architecture","Android"],["Algorithm","Application","array"],["Package","Protocol","Pointer"]]
          },
          {
            "abreviacion":"BD",
            "ingles":"Data Base",
            "espanol":"Base de datos",
            "palabras":["Data","Base"],
            "test":[["Debug","Driver","Data"],["Binary","Branch","Base"]]
          },
          {
            "abreviacion":"BIOS",
            "ingles":"Basic Input Output System",
            "espanol":"entrada básica y sistema de salida",
            "palabras":["Basic","Input","Output","System"],
            "test":[["Bug","Blockchain","Basic"],["Input","Interface","Integration"],["Object","Optimization","Output"],["Server","Socket","System"]]
          },
          {
            "abreviacion":"CD",
            "ingles":"Compact Disc",
            "espanol":"Disco compacto",
            "palabras":["Compact","Disc"],
            "test": [["Compiler","Compact","Container"],["Deployment","Binary","Disc"]]
          },
          {
            "abreviacion":"CDN",
            "ingles":"Content Delivery Network",
            "espanol":"Red de entrega de contenidos",
            "palabras":["Content","Delivery","Network"],
            "test":[["Command","Central","Content"],["development","Data","Delivery"]]
          },
          {
            "abreviacion": "CLI",
            "ingles": "Command Line Interface",
            "espanol": "Interfaz de línea de comando",
            "palabras": [
              "Command",
              "Line",
              "Interface"
            ],
            "test": [["Cache","Command","CLoud"],["Languaje","Login","Line"],["Interface","Input","In"]]
      
          },
          {
            "abreviacion": "CMS",
            "ingles": "Content Management System",
            "espanol": "Sistema de gestión de contenidos",
            "palabras": [
              "Content",
              "Management",
              "System"
            ],
            "test": [["Code","Content","Compiler"],["Markup","Management","Machine"],["System","Sassy","Search"]]
      
          },
          {
            "abreviacion": "CPU",
            "ingles": "Central processing unit",
            "espanol": "Unidad Central de procesamiento",
            "palabras": [
              "Central",
              "processing",
              "unit"
            ],
            "test": [["Central","Commit","Cascading"],["Product","Private","processing"],["Uniform","Update","unit"]]
      
          },
          {
            "abreviacion": "CRUD",
            "ingles": "Create Read Update Delete",
            "espanol": "Crear, Leer, Actualizar y Eliminar",
            "palabras": [
              "Create",
              "Read",
              "Update",
              "Delete"
            ],
            "test": [["Ceo","Create","Cypher"],["Resource","Reporting","Read"],["Update","User","Utility"],["Delete","Deployment","Dynamic"]]
      
          },
          {
            "abreviacion": "CSS",
            "ingles": "Cascading Style Sheets",
            "espanol": "",
            "palabras": [
              "Cascading",
              "Style",
              "Sheets"
            ],
            "test": [["Crud","Cascading","Container"],["Server","Source","Style"],["Sheets","Script","Swift"]]
      
          },
          {
            "abreviacion": "DBMS",
            "ingles": "Data Base Management System",
            "espanol": "",
            "palabras": [
              "Data",
              "Base",
              "Management",
              "System"
            ],
            "test": [["Data","Document","Delete"],["Base","Book","Break"],["Main","Minimon","Management"],["Saying","System","Sing"]]
      
          },
          {
            "abreviacion": "DNS",
            "ingles": "Domain Name System",
            "espanol": "",
            "palabras": [
              "Domain",
              "Name",
              "System"
            ],
            "test": [["Development","Domain","Drax"],["Name","Namespace","Noon"],["State","System","Stayed"]]
      
          },
          {
            "abreviacion": "DOM",
            "ingles": "Document Object Model",
            "espanol": "",
            "palabras": [
              "Document",
              "Object",
              "Model"
            ],
            "test": [["Document","Doom","Delivery"],["Operator","Object","Op"],["Moon","Model","Many"]]
      
          },
          {
            "abreviacion": "FIFO",
            "ingles": "First In First Out",
            "espanol": "",
            "palabras": [
              "First",
              "In",
              "First",
              "Out"
            ],
            "test": [["Fail","First","Find"],["In","Interface","Integration"],["Form","Feel","First"],["Oop","Overflow","Out"]]
      
          },
          {
            "abreviacion": "GIT",
            "ingles": "Global information tracker",
            "espanol": "",
            "palabras": [
              "Global",
              "information",
              "tracker"
            ],
            "test": [["Global","Go","Git"],["Input","information","Import"],["Them","Transformer","Tracker"]]
      
          },
          {
            "abreviacion": "GPT",
            "ingles": "Generative Pretrained Transformer",
            "espanol": "",
            "palabras": [
              "Generative",
              "Pretrained",
              "Transformer"
            ],
            "test": [["Graphic","Generative","Gloom"],["Put","Pretrained","Pain"],["Transformer","Than","Try"]]
      
          },
          {
            "abreviacion": "GPU",
            "ingles": "Graphics processing unit",
            "espanol": "",
            "palabras": [
              "Graphics",
              "processing",
              "unit"
            ],
            "test": [["Geo","Give","Graphics"],["processing","Protocol","Print"],["unit","User","Udp"]]
      
          },
          {
            "abreviacion": "GUI",
            "ingles": "Graphic User Interface",
            "espanol": "",
            "palabras": [
              "Graphic",
              "User",
              "Interface"
            ],
            "test": [["Graphic","Git","Generative"],["Using","Ui","unit"],["Insert","Interface","Imploye"]]
      
          },
          {
            "abreviacion": "HDD",
            "ingles": "Hard disk drive",
            "espanol": "",
            "palabras": [
              "Hard",
              "disk",
              "drive"
            ],
            "test": [["Hyper","Hard","Hell"],["disk","Drive","Dev"],["Docker","Dynamic","drive"]]
      
          },
          {
            "abreviacion": "HTML",
            "ingles": "Hyper text Markup Language",
            "espanol": "",
            "palabras": [
              "Hyper",
              "text",
              "Markup",
              "Language"
            ],
            "test":[["Hibernate","Hyper","Hant"],["Tool","Type","text"],["Markup","Moon","Mirage"],["Look","Language","Line"]]
      
          },
          {
            "abreviacion": "HTTP",
            "ingles": "Hyper text Transfer Protocol",
            "espanol": "",
            "palabras": [
              "Hyper",
              "text",
              "Transfer",
              "Protocol"
            ],
            "test": [["Hyper","History","Half"],["Trie","text","Token"],["Transfer","Technology","Testing"],["Pretrained","Plugin","Protocol"]]
      
          },
          {
            "abreviacion": "HTTPS",
            "ingles": "Hyper text Transfer Protocol Secure",
            "espanol": "",
            "palabras": [
              "Hyper",
              "text",
              "Transfer",
              "Protocol",
              "Secure"
            ],
            "test": [["Heap","Hyper","Holding"],["text","tuple","trigger"],["Template","Terminal","Transfer"],["Protocol","Proxy","Package"]]
      
          },
          {
            "abreviacion": "IA",
            "ingles": "Artificial Intelligence",
            "espanol": "",
            "palabras": [
              "Artificial",
              "Intelligence"
            ],
            "test": [["Array","Artificial","Algorithm"],["Inheritance","Index","Intelligence"]]
      
          },
          {
            "abreviacion": "IDE",
            "ingles": "Integrated Development Environment",
            "espanol": "",
            "palabras": [
              "Integrated",
              "Development",
              "Environment"
            ],
            "test": [["Infrastructure","Integrated","Ip"],["Debug","Deployment","Development"],["Environment","Ethernet","Endpoint"]]
      
          },
          {
            "abreviacion": "IP",
            "ingles": "Internet Protocol",
            "espanol": "",
            "palabras": [
              "Internet",
              "Protocol"
            ],
            "test": [["Internet","Instance","interface"],["Print","Polymorphism","Parameter"]]
      
          },
          {
            "abreviacion": "java",
            "ingles": "Just Another Vague Acronym",
            "espanol": "",
            "palabras": [
              "Just",
              "Another",
              "Vague",
              "Acronym"
            ],
            "test": [["Assertion","Automatic","Answer"],["Proxy","Packet","Private"],["Internet","Iot","Integer"],["Port","Protocol","Pipeline"]]
      
          },
          {
            "abreviacion": "JAVA",
            "ingles": "Just Another Vague Acronym",
            "espanol": "",
            "palabras": [
              "Just",
              "Another",
              "Vague",
              "Acronym"
            ],
            "test": [["Router","Redundant","Ram"],["Array","Application","Agile"],["Intrusion","Independent","Iteration"],["Disk","Data","Devops"]]
      
          },
          {
            "abreviacion": "JSON",
            "ingles": "Java Script Object Model",
            "espanol": "",
            "palabras": [
              "Java",
              "Script",
              "Object",
              "Model"
            ],
            "test": [["Javascript","Java","Jira"],["Script","Scrum","Serverless"],["Opcode","Open","Object"],["Middleware","Model","Multithreading"]]
      
          },
          {
            "abreviacion": "ML",
            "ingles": "Machine Learning",
            "espanol": "",
            "palabras": [
              "Machine",
              "Learning"
            ],
            "test": [["Machine","Modem","Microservices"],["Load","Logic","Learning"]]
      
          },
          {
            "abreviacion": "MVP",
            "ingles": "Minimon Viable Product",
            "espanol": "",
            "palabras": [
              "Minimon",
              "Viable",
              "Product"
            ],
            "test": [["Metadata","Malware","Minimon"],["Viable","Virtualization","Vagrant"],["Pipeline","Product","Pixel"]]
      
          },
          {
            "abreviacion": "OOP",
            "ingles": "Object oriented programming",
            "espanol": "",
            "palabras": [
              "Object",
              "oriented",
              "programming"
            ],
            "test": [["Overflow","Object","OpenGL"],["oriented","Orm","OAuth"],["Pull","Python","programming"]]
      
          },
          {
            "abreviacion": "PERL",
            "ingles": "Practical Extraction Reporting Language",
            "espanol": "",
            "palabras": [
              "Practical",
              "Extraction",
              "Reporting",
              "Language"
            ],
            "test":[["Practical","Product","Project"],["Environment","Exabyte","Extraction"],["Repository","Reporting","Runtime"],["Language","Library","Latency"]]
      
          },
          {
            "abreviacion": "PO",
            "ingles": "Product Owner",
            "espanol": "",
            "palabras": [
              "Product",
              "Owner"
            ],
            "test": [["Pointer","Printer","Product"],["Os","Owner","Object"]]
      
          },
          {
            "abreviacion": "RAM",
            "ingles": "Random access memory",
            "espanol": "",
            "palabras": [
              "Random",
              "access",
              "memory"
            ],
            "test": [["Random","Ruby","Raid"],["Analytics","access","Ascii"],["Multithreading","Middleware","memory"]]
      
          },
          {
            "abreviacion": "REST",
            "ingles": "Representational State Transfer",
            "espanol": "",
            "palabras": [
              "Representational",
              "State",
              "Transfer"
            ],
            "test": [["Reporting","Representational","Random"],["State","software","system"],["Thread","Template","Transfer"]]
      
          },
          {
            "abreviacion": "SASS",
            "ingles": "Sassy Cascading Style Sheets",
            "espanol": "",
            "palabras": [
              "Sassy",
              "Cascading",
              "Style",
              "Sheets"
            ],
            "test": [["Software","Sassy","Systems"],["Computing","Cloud","Cascading"],["Style","Servers","Storage"],["Streams","Silicon","Sheets"]]
      
          },
          {
            "abreviacion": "SDK",
            "ingles": "software development kit",
            "espanol": "",
            "palabras": [
              "software",
              "development",
              "kit"
            ],
            "test": [["software","Security","Scalability"],["Data","Deployment","development"],["Kernel","kit","Key"]]
      
          },
          {
            "abreviacion": "SEO",
            "ingles": "Search Engine Optimization",
            "espanol": "",
            "palabras": [
              "Search",
              "Engine",
              "Optimization"
            ],
            "test": [["Semantic","Syntax","Search"],["Encryption","Endpoint","Engine"]]
      
          },
          {
            "abreviacion": "SOAP",
            "ingles": "Simple Object Access Protocol",
            "espanol": "",
            "palabras": [
              "Simple",
              "Object",
              "Access",
              "Protocol"
            ],
            "test": [["Simple","Scripting","Synchronization"],["Object-oriented","Object","Open-source"],["API","Architecture","Access"],["Proxy","Programming","Protocol"]]
      
          },
          {
            "abreviacion": "SQL",
            "ingles": "Structured Query Language",
            "espanol": "",
            "palabras": [
              "Structured",
              "Query",
              "Language"
            ],
            "test": [["Schema","Structured","SQL"],["Queue","Quality","Query"],["Libraries","Language","Lifecycle"]]
      
          },
          {
            "abreviacion": "SSD",
            "ingles": "Solid State Drive",
            "espanol": "",
            "palabras": [
              "Solid",
              "State",
              "Drive"
            ],
            "test": [["Software","Solutions","Solid"],["State","Systems","Switch"],["Docker","Drive","Domain"]]
      
          },
          {
            "abreviacion": "SSL",
            "ingles": "Secure Sockets layer",
            "espanol": "",
            "palabras": [
              "Secure",
              "Sockets",
              "layer"
            ],
            "test": [["Sandbox","Signature","Secure"],["Session","Sockets","Storage"],["Layer","Logic","Load-balancing"]]
      
          },
          {
            "abreviacion": "TDD",
            "ingles": "Test Driven Development",
            "espanol": "",
            "palabras": [
              "Test",
              "Driven",
              "Development"
            ],
            "test": [["Test","Testing,Traceability"],["Docker","Drive","Domain"],["Development","Debugging","Design"]]
      
          },
          {
            "abreviacion": "UI",
            "ingles": "User interface",
            "espanol": "",
            "palabras": [
              "User",
              "interface"
            ],
            "test": [["Usability","Updates","User"],["Integration","IoT","Interface"]]
      
          },
          {
            "abreviacion": "URL",
            "ingles": "Uniform Resource Locator",
            "espanol": "",
            "palabras": [
              "Uniform",
              "Resource",
              "Locator"
            ],
            "test": [["Utility","User-centric","Uniform"],["Repository","Resource","Routing"],["Locator","Localization","Logic"]]
      
          },
          {
            "abreviacion": "UX",
            "ingles": "User Experience",
            "espanol": "",
            "palabras": [
              "User",
              "Experience"
            ],
            "test": [["User","UX","Uptime"],["Experimentation","Efficiency","Experience"]]
      
          },
          {
            "abreviacion": "VCS",
            "ingles": "voice communication system",
            "espanol": "",
            "palabras": [
              "voice",
              "communication",
              "system"
            ],
            "test": [["Virtualization","Voice","Validation"],["Collaboration","Cloud","Communication"],["System","Systems","Security"]]
      
          },
          {
            "abreviacion": "VPN",
            "ingles": "Virtual Private Network",
            "espanol": "",
            "palabras": [
              "Virtual",
              "Private",
              "Network"
            ],
            "test": [["Visualization","Virtual","Version"],["Privacy","Protocol","Private"],["Network","Networking","Nodes"]]
      
          },
          {
            "abreviacion": "VRAM",
            "ingles": "Video Random Access Memory",
            "espanol": "",
            "palabras": [
              "Video",
              "Random",
              "Access",
              "Memory"
            ],
            "test": [["Video","Visualization","Virtual"],["Repository","Runtime","Random"],["Access","Algorithms","Automation"],["Microservices","Memory","Machine-learning"]]
      
          },
          {
            "abreviacion": "WWW",
            "ingles": "World Wide Web",
            "espanol": "",
            "palabras": [
              "World",
              "Wide",
              "Web"
            ],
            "test": [["Web","World","Workflow"],["Wide","Wireless","WAN"],["Widgets","Webhooks","Web"]]
      
          }
      ],
      "PhrasalVerb":[
          {
            "Phrasal":[
              {
                "ingles": "Print out",
                "espanol": "Imprimir",
                "image": ["🖨️","","",""],
                "ingles2": "To Print",
                "espanol2": "Imprimir",
                "image2": ["🖨️","","",""]
              },
              {
                "ingles": "Sign up",
                "espanol": "Registrarse",
                "image": ["🙋‍♂️","empty","📝","",""]
            ,
                "ingles2": "To Check in",
                "espanol2": "Registrarse",
                "image2": ["🙋‍♂️","empty","📝","",""]
            
              },
              {
                "ingles": "Log in",
                "espanol": "Iniciar sesión",
                "image": ["🌐","empty","🔄","empty"]
            ,
                "ingles2": "To Start",
                "espanol2": "Iniciar / Empezar",
                "image2": ["🌐","empty","🔄","empty"]
            
              },
              {
                "ingles": "Set up",
                "espanol": "Configurar",
                "image": ["empty","empty","🔧","💻"]
            ,
                "ingles2": "To Establish",
                "espanol2": "To Establish: Establecer",
                "image2": ["empty","empty","🔧","💻"]
            
              },
              {
                "ingles": "Check out",
                "espanol": "Revisar",
                "image": ["empty","empty","✔","📄"]
            ,
                "ingles2": "To Inspect",
                "espanol2": "Inspeccionar",
                "image2": ["empty","empty","✔","📄"]
            
              },
              {
                "ingles": "Plug in",
                "espanol": "Enchufar",
                "image": ["🔌"]
            ,
                "ingles2": "To Connet",
                "espanol2": "Conectar",
                "image2": ["🔌"]
            
              },
              {
                "ingles": "Boot up",
                "espanol": "Arrancar",
                "image": ["🌱","🫲","","",""]
            ,
                "ingles2": "To Start up",
                "espanol2": "Arrancar",
                "image2": ["🌱","🫲","","",""]
            
              },
              {
                "ingles": "Back up",
                "espanol": "Hacer una copia de seguridad",
                "image": ["💾","empty","💻","empty"]
            ,
                "ingles2": "To protect",
                "espanol2": "Proteger",
                "image2": ["💾","empty","💻","empty"]
            
              },
              {
                "ingles": "Switch over",
                "espanol": "Cambiar",
                "image": ["👨‍🦱","🔄","👩",""]
            ,
                "ingles2": "Exchange",
                "espanol2": "Intercambiar",
                "image2": ["👨‍🦱","🔄","👩",""]
            
              },
              {
                "ingles": "Roll back",
                "espanol": "Revertir",
                "image": ["⏪","","",""]
            ,
                "ingles2": "To Revert",
                "espanol2": "Revertir",
                "image2": ["⏪","","",""]
            
              },
              {
                "ingles": "Bring up",
                "espanol": "Traer a colación",
                "image": ["📤","empty","🗣","empty","📄"]
            ,
                "ingles2": "To appear",
                "espanol2": "Aparecer",
                "image2": ["📤","empty","🗣","empty","📄"]
            
              },
              {
                "ingles": "Log out",
                "espanol": "Cerrar sesión",
                "image": ["empty","empty","🔒","🌐",""]
            ,
                "ingles2": "To Close session",
                "espanol2": "Cerrar sesión",
                "image2": ["empty","empty","🔒","🌐",""]
            
              },
              {
                "ingles": "Speed up",
                "espanol": "Acelerar",
                "image": ["🚴","empty","💨","",""]
            ,
                "ingles2": "To Accelerate",
                "espanol2": "Acelerar",
                "image2": ["🚴","empty","💨","",""]
            
              },
              {
                "ingles": "Split up",
                "espanol": "Separarse",
                "image": ["👨‍🦲","empty","👩","💔",""]
            ,
                "ingles2": "To Separate",
                "espanol2": "Separar",
                "image2": ["👨‍🦲","empty","👩","💔",""]
            
              },
              {
                "ingles": "Scale up",
                "espanol": "Escalar",
                "image": ["empty","🧗","🗻","empty",""]
            ,
                "ingles2": "To Advance",
                "espanol2": "Avanzar",
                "image2": ["empty","🧗","🗻","empty",""]
            
              },
              {
                "ingles": "Scale down",
                "espanol": "Reducir",
                "image": ["empty","empty","▶️","🖥️"]
            ,
                "ingles2": "To Decrease",
                "espanol2": "Disminuir",
                "image2": ["empty","empty","▶️","🖥️"]
            
              },
              {
                "ingles": "Hook up",
                "espanol": "Conectar",
                "image": ["🔌"]
            ,
                "ingles2": "To Connect",
                "espanol2": "Conectar",
                "image2": ["🔌"]
            
              },
              {
                "ingles": "Power up",
                "espanol": "Encender/Poner en marcha",
                "image": ["empty","🔦","💡","empty"]
            ,
                "ingles2": "To ignite",
                "espanol2": "Encender",
                "image2": ["empty","🔦","💡","empty"]
            
              }
            
            ],
            "Verbo":[
              {
                "ingles": "Print",
                "espanol": "Imprimir",
                "image": [
                  "🖨️",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Sign",
                "espanol": "Firmar",
                "image": [
                  "empty",
                  "📋",
                  "✍️",
                  "empty"
                ]
              },
              {
                "ingles": "Log",
                "espanol": "Registro",
                "image": [
                  "empty",
                  "🗳️",
                  "✍️",
                  "empty"
                ]
              },
              {
                "ingles": "Set",
                "espanol": "Colocar",
                "image": [
                  "empty",
                  "📮",
                  "📧",
                  "empty"
                ]
              },
              {
                "ingles": "Check",
                "espanol": "Controlar",
                "image": [
                  "empty",
                  "🎮",
                  "🎢",
                  "empty"
                ]
              },
              {
                "ingles": "Plug",
                "espanol": "Enchufar",
                "image": [
                  "empty",
                  "empty",
                  "⚡",
                  "🔌"
                ]
              },
              {
                "ingles": "Boot",
                "espanol": "Bota",
                "image": [
                  "🚗",
                  "empty",
                  "💨",
                  "empty"
                ]
              },
              {
                "ingles": "Switch",
                "espanol": "Cambiar",
                "image": [
                  "👨‍🦱",
                  "🔄",
                  "👩",
                  "empty"
                ]
              },
              {
                "ingles": "Roll",
                "espanol": "Rollo",
                "image": [
                  "🎡",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Back",
                "espanol": "Espalda",
                "image": [
                  "🔙",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "go",
                "espanol": "Ir",
                "image": [
                  "empty",
                  "🚶‍♂️",
                  "🧳",
                  "empty"
                ]
              },
              {
                "ingles": "split",
                "espanol": "Dividir",
                "image": [
                  "➗"
                ]
              },
              {
                "ingles": "Give",
                "espanol": "Dar",
                "image": [
                  "🤜",
                  "empty",
                  "📥"
                ]
              },
              {
                "ingles": "Speed",
                "espanol": "Velocidad",
                "image": [
                  "empty",
                  "🏍️",
                  "⚡",
                  "empty"
                ]
              },
              {
                "ingles": "Zoom",
                "espanol": "Zoom",
                "image": [
                  "🔎",
                  "empty",
                  "➕",
                  "empty"
                ]
              },
              {
                "ingles": "Hook",
                "espanol": "Gancho",
                "image": [
                  "empty",
                  "🌂"
                ]
              },
              {
                "ingles": "Scale",
                "espanol": "Escala",
                "image": [
                  "🧗",
                  "🗻",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Debug",
                "espanol": "Depurar",
                "image": [
                  "🚮",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Find",
                "espanol": "Encontrar",
                "image": [
                  "🔎",
                  "💎",
                  "✅",
                  "empty"
                ]
              },
              {
                "ingles": "Come",
                "espanol": "Venir",
                "image": [
                  "empty",
                  "🏘️",
                  "🚶",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "pay",
                "espanol": "Pagar",
                "image": [
                  "👨‍🔧",
                  "empty",
                  "🚶",
                  "empty",
                  "💲"
                ]
              },
              {
                "ingles": "Take",
                "espanol": "Tomar",
                "image": [
                  "empty",
                  "🧔",
                  "🍸",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Put",
                "espanol": "Poner",
                "image": [
                  "empty",
                  "empty",
                  "🐔",
                  "🐣",
                  "empty"
                ]
              },
              {
                "ingles": "Bring",
                "espanol": "Traer",
                "image": [
                  "🏠",
                  "🗂️",
                  "🚚",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Get",
                "espanol": "Obtener",
                "image": [
                  "empty",
                  "🧍‍♂️",
                  "empty",
                  "empty",
                  "💎"
                ]
              },
              {
                "ingles": "Look",
                "espanol": "Mirar",
                "image": [
                  "👨‍💼",
                  "empty",
                  "🖥️",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Call",
                "espanol": "Llamar",
                "image": [
                  "empty",
                  "empty",
                  "📳",
                  "🗣️",
                  "empty"
                ]
              },
              {
                "ingles": "Fill",
                "espanol": "Llenar",
                "image": [
                  "empty",
                  "empty",
                  "🧫",
                  "🧪",
                  "empty"
                ]
              },
              {
                "ingles": "Drive",
                "espanol": "Conducir",
                "image": [
                  "empty",
                  "empty",
                  "🏎️",
                  "🏎️",
                  "empty"
                ]
              },
              {
                "ingles": "Carry",
                "espanol": "Llevar",
                "image": [
                  "empty",
                  "🌂",
                  "empty",
                  "empty",
                  "🚶‍♂️"
                ]
              },
              {
                "ingles": "Clean",
                "espanol": "Limpiar",
                "image": [
                  "🏚️",
                  "empty",
                  "🧍‍♀️",
                  "empty",
                  "🧹"
                ]
              },
              {
                "ingles": "Sift",
                "espanol": "Tamizar/Cernir",
                "image": [
                  "empty",
                  "🏝️",
                  "⚒️",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Run",
                "espanol": "Correr",
                "image": [
                  "empty",
                  "🏃",
                  "🏃‍♀️",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Break",
                "espanol": "Romper",
                "image": [
                  "🥛",
                  "🔨",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Hang",
                "espanol": "Colgar",
                "image": [
                  "empty",
                  "empty",
                  "🧗",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "Check",
                "espanol": "Comprobar/Verificar",
                "image": [
                  "empty",
                  "empty",
                  "empty",
                  "📃",
                  "☑︎"
                ]
              },
              {
                "ingles": "Put",
                "espanol": "Poner",
                "image": [
                  "🥚",
                  "🐓"
                ]
              },
              {
                "ingles": "Turn",
                "espanol": "Girar/Voltear",
                "image": [
                  "empty",
                  "⤴️",
                  "🏍️",
                  "⤵️"
                ]
              },
              {
                "ingles": "Look",
                "espanol": "Mirar",
                "image": [
                  "🕴️",
                  "empty",
                  "empty",
                  "empty",
                  "🔭"
                ]
              },
              {
                "ingles": "Get",
                "espanol": "Obtener/Conseguir",
                "image": [
                  "No",
                  "se",
                  "me",
                  "ocurre",
                  "nada"
                ]
              },
              {
                "ingles": "Keep",
                "espanol": "Mantener",
                "image": [
                  "🤱"
                ]
              },
              {
                "ingles": "Speak",
                "espanol": "Hablar",
                "image": [
                  "🗣️",
                  "empty",
                  "👤"
                ]
              },
              {
                "ingles": "Walk",
                "espanol": "Caminar",
                "image": [
                  "empty",
                  "🚶",
                  "🚶‍♀️"
                ]
              }
            
            ],
            "Preposiciones":[
              {
                "ingles": "out",
                "espanol": "afuera",
                "image": [
                  "🚪",
                  "🕺",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "off",
                "espanol": "apagado",
                "image": [
                  "📴",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "in",
                "espanol": "en",
                "image": [
                  "👉",
                  "empty",
                  "⛺",
                  "empty"
                ]
              },
              {
                "ingles": "up",
                "espanol": "arriba",
                "image": [
                  "🔝",
                  "empty",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "over",
                "espanol": "encima",
                "image": [
                  "empty",
                  "🚠",
                  "empty",
                  "🙆‍♂️"
                ]
              },
              {
                "ingles": "back",
                "espanol": "atrás",
                "image": [
                  "🔙"
                ]
              },
              {
                "ingles": "after",
                "espanol": "después",
                "image": [
                  "🌦️",
                  "🕓",
                  "🌈",
                  "empty"
                ]
              },
              {
                "ingles": "into",
                "espanol": "en",
                "image": [
                  "👉",
                  "empty",
                  "⛺"
                ]
              },
              {
                "ingles": "code",
                "espanol": "código",
                "image": [
                  "👨‍💻",
                  "📈",
                  "empty",
                  "empty"
                ]
              },
              {
                "ingles": "of",
                "espanol": "de",
                "image": [
                  "🦷",
                  "👉",
                  "🙋‍♂️"
                ]
              },
              {
                "ingles": "through",
                "espanol": "a través de",
                "image": [
                  "empty",
                  "🗻",
                  "empty",
                  "🚇",
                  "empty"
                ]
              },
              {
                "ingles": "round",
                "espanol": "redondo",
                "image": [
                  "⭕"
                ]
              },
              {
                "ingles": "down",
                "espanol": "abajo",
                "image": [
                  "empty",
                  "🌧️",
                  "🙆‍♂️"
                ]
              },
              {
                "ingles": "by",
                "espanol": "por",
                "image": [
                  "✖️"
                ]
              },
              {
                "ingles": "away",
                "espanol": "lejos",
                "image": [
                  "🗺️",
                  "🌎",
                  "🛫"
                ]
              },
              {
                "ingles": "online",
                "espanol": "en linea",
                "image": [
                  "🌐",
                  "empty",
                  "📶",
                  "empty"
                ]
              },
              {
                "ingles": "offline",
                "espanol": "desconectado",
                "image": [
                  "🔌",
                  "empty",
                  "🖥️",
                  "empty",
                  "🚫"
                ]
              }
            
            ]
          }
      ]
    }
  ]
  ngAfterViewInit(){
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

