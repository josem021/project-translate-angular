import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActAcronimosComponent } from './act-acronimos.component';

describe('ActAcronimosComponent', () => {
  let component: ActAcronimosComponent;
  let fixture: ComponentFixture<ActAcronimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActAcronimosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActAcronimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
