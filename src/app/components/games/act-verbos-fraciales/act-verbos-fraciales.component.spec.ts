import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActVerbosFracialesComponent } from './act-verbos-fraciales.component';

describe('ActVerbosFracialesComponent', () => {
  let component: ActVerbosFracialesComponent;
  let fixture: ComponentFixture<ActVerbosFracialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActVerbosFracialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActVerbosFracialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
