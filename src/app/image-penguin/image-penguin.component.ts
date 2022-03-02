import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { penguin } from '../../assets/model/penguin.model';

@Component({
  selector: 'app-image-penguin',
  templateUrl: './image-penguin.component.html',
  styleUrls: ['./image-penguin.component.css'],
})
export class ImagePenguinComponent implements OnInit {
  @Input()
  penguin!: penguin;

  constructor(@Inject(DOCUMENT) document: Document) {}

  ngOnInit(): void {}

  getPenguinUrl(): String {
    return 'assets/gif/' + this.penguin.qID + '.gif';
  }
}
