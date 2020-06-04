import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Injectable()
export class TodoService {

  todoList:AngularFireList<any>;

  constructor( private firebasedb : AngularFireDatabase) { }
  gettodoList(){
    this.todoList=this.firebasedb.list('tittle');
    return this.todoList;

  }
  addTittle(tittle:string) {
    this.todoList.push({
      tittle:tittle,
      ischecked:false
    })
  }
  checkedorUnchecked($key: string,flag:boolean){
    this.todoList.update($key,{isChecked:flag});
  }
  removeTittle($key:string){
    this.todoList.remove($key);
  }
}
