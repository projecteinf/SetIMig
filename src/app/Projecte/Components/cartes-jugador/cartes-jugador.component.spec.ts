import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesJugadorComponent } from './cartes-jugador.component';

describe('CartesJugadorComponent', () => {
  let component: CartesJugadorComponent;
  let fixture: ComponentFixture<CartesJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartesJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
