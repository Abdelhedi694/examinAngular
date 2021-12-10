import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheUneStatistiqueComponent } from './affiche-une-statistique.component';

describe('AfficheUneStatistiqueComponent', () => {
  let component: AfficheUneStatistiqueComponent;
  let fixture: ComponentFixture<AfficheUneStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheUneStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheUneStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
