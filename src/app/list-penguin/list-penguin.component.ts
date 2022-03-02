import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListPenguinService } from './list-penguin.service';
import { Observable } from 'rxjs';
import { penguin } from '../../assets/model/penguin.model';

@Component({
  selector: 'app-list-penguin',
  templateUrl: './list-penguin.component.html',
  styleUrls: ['./list-penguin.component.css'],
})
export class ListPenguinComponent implements OnInit {
  public penguinList: Observable<any> | undefined;

  constructor(private penguinService: ListPenguinService) {}

  ngOnInit(): void {
    this.penguinList = this.penguinService.getAllPenguins();
  }

  makePenguin3Object() {}
}
