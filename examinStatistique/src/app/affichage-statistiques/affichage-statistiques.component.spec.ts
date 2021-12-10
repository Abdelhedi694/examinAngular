import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageStatistiquesComponent } from './affichage-statistiques.component';

describe('AffichageStatistiquesComponent', () => {
  let component: AffichageStatistiquesComponent;
  let fixture: ComponentFixture<AffichageStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageStatistiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
