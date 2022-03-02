import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { penguin } from '../../assets/model/penguin.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListPenguinService {
  penguinList: Observable<any> | undefined;
  penguinList$: Subject<Array<Array<penguin>>> = new Subject();

  constructor(private httpClient: HttpClient) {}

  getAllPenguins() {
    let arrayRow: penguin[] = [];
    let ArrayPenguins: any = new Array();
    let count = 0;
    let penguinArray = this.httpClient.get<penguin[]>('assets/PENGUIN.JSON');
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
    console.log(ArrayPenguins);
    console.log(JSON.stringify(ArrayPenguins));
    return (this.penguinList = this.httpClient.get('assets/PENGUIN.JSON'));
  }
}
