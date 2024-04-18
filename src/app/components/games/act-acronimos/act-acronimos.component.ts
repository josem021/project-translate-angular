import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-act-acronimos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./act-acronimos.component.html",
  styleUrl: "./act-acronimos.component.css"
})
export class ActAcronimosComponent implements OnInit {

  count = 1
  arratyprueba: any = [
    {
    "abreviacion":"API",
    "ingles":"Application Programming Interface",
    "Español":"Interfaz de programación de aplicaciones",
    "palabras":["Application","Programming","Interface"],
    "test":[["Algorithm","Application","array"],["Protocol","Programming","Proxy"],["Interface","Inheritance","Index"]]
    },
    {
      "abreviacion":"APK",
      "ingles":"Android Application Package",
      "Español":"Paquete de aplicaciones de Android",
      "palabras": ["Android","Application","Package"],
      "test":[["agile","Architecture","Android"],["Algorithm","Application","array"],["Package","Protocol","Pointer"]]
    },
    {
      "abreviacion":"BD",
      "ingles":"Data Base",
      "Español":"Base de datos",
      "palabras":["Data","Base"],
      "test":[["Debug","Driver","Data"],["Binary","Branch","Base"]]
    },
    {
      "abreviacion":"BIOS",
      "ingles":"Basic Input Output System",
      "Español":"entrada básica y sistema de salida",
      "palabras":["Basic","Input","Output","System"],
      "test":[["Bug","Blockchain","Basic"],["Input","Interface","Integration"],["Object","Optimization","Output"],["Server","Socket","System"]]
    },
    {
      "abreviacion":"CD",
      "ingles":"Compact Disc",
      "Español":"Disco compacto",
      "palabras":["Compact","Disc"],
      "test": [["Compiler","Compact","Container"],["Deployment","Binary","Disc"]]
    },
    {
      "abreviacion":"CDN",
      "ingles":"Content Delivery Network",
      "Español":"Red de entrega de contenidos",
      "palabras":["Content","Delivery","Network"],
      "test":[["Command","Central","Content"],["development","Data","Delivery"]]
    },
    {
      "abreviacion": "CLI",
      "ingles": "Command Line Interface",
      "Español": "Interfaz de línea de comando",
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
      "Español": "Sistema de gestión de contenidos",
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
      "Español": "Unidad Central de procesamiento",
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
      "Español": "Crear, Leer, Actualizar y Eliminar",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
      "palabras": [
        "Artificial",
        "Intelligence"
      ],
      "test": [["Array","Artificial","Algorithm"],["Inheritance","Index","Intelligence"]]

    },
    {
      "abreviacion": "IDE",
      "ingles": "Integrated Development Environment",
      "Español": "",
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
      "Español": "",
      "palabras": [
        "Internet",
        "Protocol"
      ],
      "test": [["Internet","Instance","interface"],["Print","Polymorphism","Parameter"]]

    },
    {
      "abreviacion": "java",
      "ingles": "Just Another Vague Acronym",
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
      "palabras": [
        "Machine",
        "Learning"
      ],
      "test": [["Machine","Modem","Microservices"],["Load","Logic","Learning"]]

    },
    {
      "abreviacion": "MVP",
      "ingles": "Minimon Viable Product",
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
      "palabras": [
        "Product",
        "Owner"
      ],
      "test": [["Pointer","Printer","Product"],["Os","Owner","Object"]]

    },
    {
      "abreviacion": "RAM",
      "ingles": "Random access memory",
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
      "palabras": [
        "User",
        "interface"
      ],
      "test": [["Usability","Updates","User"],["Integration","IoT","Interface"]]

    },
    {
      "abreviacion": "URL",
      "ingles": "Uniform Resource Locator",
      "Español": "",
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
      "Español": "",
      "palabras": [
        "User",
        "Experience"
      ],
      "test": [["User","UX","Uptime"],["Experimentation","Efficiency","Experience"]]

    },
    {
      "abreviacion": "VCS",
      "ingles": "voice communication system",
      "Español": "",
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
      "Español": "",
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
      "Español": "",
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
      "Español": "",
      "palabras": [
        "World",
        "Wide",
        "Web"
      ],
      "test": [["Web","World","Workflow"],["Wide","Wireless","WAN"],["Widgets","Webhooks","Web"]]

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
