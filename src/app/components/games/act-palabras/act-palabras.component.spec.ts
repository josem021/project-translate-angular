import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPalabrasComponent } from './act-palabras.component';

describe('ActPalabrasComponent', () => {
  let component: ActPalabrasComponent;
  let fixture: ComponentFixture<ActPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActPalabrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
