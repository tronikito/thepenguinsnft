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

    /**
     *       <div *ngFor="let penguin of penguins" class="item">
        <app-image-penguin [penguin]="penguin"></app-image-penguin>
      </div>
     */
    /**
     * this.penguinList?.subscribe(this.penguinRows);

    let arrayRow: penguin[] = [];
    let ArrayPenguins: any = [];
    let count = 0;
    let penguinArray = this.penguinService.getAllPenguins();
    penguinArray.forEach(function (value) {
      value.forEach(function (penguin: penguin) {
        if (count < 5) {
          arrayRow.push(penguin);
          count++;
        }
        if (count == 5) {
          ArrayPenguins.push(arrayRow);
          arrayRow = [];
          count = 0;
        }
      });
    });

    this.penguinRows = ArrayPenguins;
    console.log(ArrayPenguins);
    this.penguinList?.subscribe(this.penguinRows);**/
  }

  makePenguin3Object() {}
}
