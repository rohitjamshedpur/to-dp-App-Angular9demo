import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database/database';

@Injectable()
export class ToDoServiceService {
  todoList:AngularFireList<any>;

  constructor(private firebasedb : AngularFireDatabase){  }
getTodoList(){
  this.todoList=this.firebasedb.list('titles');
  return this.getTodoList;
}
addTittle(tittle:string){
  this.todoList.push({
    
      tittle:tittle,
      ischecked:false
    })
  
}
chcekorUncheck($key:string, flag:boolean){
  this.todoList.update($key,{ischceked:flag});
}
removeTittle($key:string){
  this.todoList.remove($key);
}

}
