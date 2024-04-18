import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSkyComponent } from './star-sky.component';

describe('StarSkyComponent', () => {
  let component: StarSkyComponent;
  let fixture: ComponentFixture<StarSkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarSkyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
