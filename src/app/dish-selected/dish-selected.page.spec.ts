import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishSelectedPage } from './dish-selected.page';

describe('DishSelectedPage', () => {
  let component: DishSelectedPage;
  let fixture: ComponentFixture<DishSelectedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DishSelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
