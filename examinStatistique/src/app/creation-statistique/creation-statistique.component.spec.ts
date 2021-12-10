import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStatistiqueComponent } from './creation-statistique.component';

describe('CreationStatistiqueComponent', () => {
  let component: CreationStatistiqueComponent;
  let fixture: ComponentFixture<CreationStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
