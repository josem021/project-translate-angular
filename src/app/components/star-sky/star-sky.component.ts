import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-star-sky',
  standalone: true,
  imports: [],
  templateUrl: './star-sky.component.html',
  styleUrl: './star-sky.component.css'
})
export class StarSkyComponent implements AfterViewInit, OnInit {
  @Input() PositionGo: number = 1
  @Input() PositionNow: number = 1
  @Input() MoveDefault: number = 0
  @Output() dataStarSky = new EventEmitter<any>
  data: any = {}
  emitterSky(){
    this.data.PositionNow = this.PositionNow
    this.data.MoveDefault = this.MoveDefault
    this.data.PositionGo = this.PositionGo
    this.dataStarSky.emit(this.data)
  }
  private MoveDefaultCopy = this.MoveDefault
  // getMoveDefault(){
  //   return this.MoveDefault
  // }
  canvas: any
  ctx: any
  MultSpeed:number = .5
  speedTemporal:number = 1
  speedBase = 1;
  stopDelay: any
  numberStar = 200
  ngOnChanges(change: SimpleChanges) {

  }
  ngOnInit(): void {
    this.canvas as HTMLCanvasElement
  }
  @ViewChild('canvas') canvasRef!: ElementRef;
  ngAfterViewInit() {
    let canvas = this.canvasRef.nativeElement;
    let ctx = canvas.getContext('2d');
    let scale = window.devicePixelRatio; // Cambia esto a +un número más alto para aumentar la resolución
    canvas.width = Math.floor(canvas.clientWidth * scale);
    canvas.height = Math.floor(canvas.clientHeight * scale);
    ctx.scale(scale, scale);
    this.startCanvas(canvas, ctx)
  }
  startCanvas(canvas: HTMLCanvasElement, ctx: any){
    if (ctx !== null) {
      class Star extends StarSkyComponent{
        constructor(public x: number, public y: number, public size: number, public speed: number) {
          super();
        }
        draw(ctx: CanvasRenderingContext2D) {
          // Dibuja la estrella
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
        }
        move() {
          this.directionStars()
        }
        private directionStars() {
          if (this.MoveDefault == 0) {
            this.moveRight()
          }
          if (this.MoveDefault == 1) {
            this.moveLeft()
          }
        }
        private moveRight() {
          this.x += this.speed * this.speedTemporal;
          if (this.x > canvas.width) {
            this.x = -10;
            this.y = Math.random() * canvas.width;
          }
        }
        private moveDown() {
          this.y += this.speed * this.speedTemporal;
          if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
          }
        }
        private moveLeft() {
          this.x += (this.speed) * -1 * this.speedTemporal;
          if (this.x < 0) {
            this.x = canvas.width;
            this.y = Math.random() * canvas.width;
          }
        }
        private moveUp() {
          this.y += (this.speed) * -1 * this.speedTemporal;
          if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
          }
        }
      }
  
      let stars: Star[] = [];
  
      for (let i = 0; i < this.numberStar; i++) { // Crea las estrellas instanciandolas en la clase "Star"
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 3;
        let speed = Math.random() * this.MultSpeed;
        stars.push(new Star(x, y, size, speed));
      }
      console.table(stars)
  
      function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let star of stars) {
          star.draw(ctx);
          star.move();
        }
        requestAnimationFrame(update);
      }
      update();
    }
  }
  
  differencePosition() {
    let positionDifference = Math.abs(this.PositionGo - this.PositionNow)
    console.log(positionDifference)
    return positionDifference
  }
  private incrementSpeed() {
    alert(`PositionGo -> ${this.PositionGo} --- PositionNow -> ${this.PositionNow}`)
    if(this.PositionGo > this.PositionNow){
      this.MoveDefault = 0
    }else if(this.PositionGo < this.PositionNow){
      this.MoveDefault = 1
    }
    this.speedTemporal = 25 * this.differencePosition();
    if(this.stopDelay !== null){
      clearInterval(this.stopDelay)
    }
    this.stopDelay = setInterval(this.normalizeSpeed, 1000)
    this.PositionNow = this.PositionGo
  }
  private normalizeSpeed() {
    console.log("normalizeSpeed")
    this.speedTemporal = this.speedBase
    clearInterval(this.stopDelay)
    this.stopDelay = null
    this.PositionNow = this.PositionGo
    // this.emitterSky()
  }
}




