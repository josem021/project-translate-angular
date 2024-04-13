import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPalabrasVerbosFracialesComponent } from './act-palabras-verbos-fraciales.component';

describe('ActPalabrasVerbosFracialesComponent', () => {
  let component: ActPalabrasVerbosFracialesComponent;
  let fixture: ComponentFixture<ActPalabrasVerbosFracialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActPalabrasVerbosFracialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActPalabrasVerbosFracialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
