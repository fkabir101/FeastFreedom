import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedMenuItemsComponent } from './created-menu-items.component';

describe('CreatedMenuItemsComponent', () => {
  let component: CreatedMenuItemsComponent;
  let fixture: ComponentFixture<CreatedMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
