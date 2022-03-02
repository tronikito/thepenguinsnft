import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenguinComponent } from './list-penguin.component';

describe('ListPenguinComponent', () => {
  let component: ListPenguinComponent;
  let fixture: ComponentFixture<ListPenguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPenguinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
