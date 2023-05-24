import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
 characterList: Character[]=[
  {
    id: uuid(),
    name: 'Trunks',
    power: 1000,
 }]



 @Output()
 onDelete:EventEmitter<string>=new EventEmitter()

//  onDeleteCharacter(id:string):void{
//   this.onDelete.emit(id)
//  }
deleteCharacterById(id:string):void{
  this.onDelete.emit(id)
}


}
