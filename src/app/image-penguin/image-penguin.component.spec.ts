import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePenguinComponent } from './image-penguin.component';

describe('ImagePenguinComponent', () => {
  let component: ImagePenguinComponent;
  let fixture: ComponentFixture<ImagePenguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePenguinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePenguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
