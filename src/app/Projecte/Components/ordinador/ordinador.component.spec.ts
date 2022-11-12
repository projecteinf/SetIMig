import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinadorComponent } from './ordinador.component';

describe('OrdinadorComponent', () => {
  let component: OrdinadorComponent;
  let fixture: ComponentFixture<OrdinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
