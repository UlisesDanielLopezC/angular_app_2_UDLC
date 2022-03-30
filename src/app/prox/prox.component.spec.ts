import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxComponent } from './prox.component';

describe('ProxComponent', () => {
  let component: ProxComponent;
  let fixture: ComponentFixture<ProxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
