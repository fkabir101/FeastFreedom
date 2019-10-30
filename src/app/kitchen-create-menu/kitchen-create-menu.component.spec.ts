import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCreateMenuComponent } from './kitchen-create-menu.component';

describe('KitchenCreateMenuComponent', () => {
  let component: KitchenCreateMenuComponent;
  let fixture: ComponentFixture<KitchenCreateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenCreateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
