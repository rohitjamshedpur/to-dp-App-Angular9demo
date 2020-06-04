import { Component, OnInit } from '@angular/core';
import {TodoService} from './shared/todo.service';
import { element } from 'protractor';



@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.css'],
  providers:[TodoService]
})
export class ToDoComponentComponent implements OnInit {

  todolistArray:any[];
  constructor(private todoservice:TodoService) { }

  ngOnInit():void {
    this.todoservice.  gettodoList().snapshotChanges().subscribe(item =>{
      this.todolistArray=[];
      item.forEach(element=>{
        var x=element.payload.toJSON();
        x["$key"]=element.key;
        this.todolistArray.push(x);
      })

      this.todolistArray.sort((a,b)=>{
        return (b.isChecked - a.isChecked);
      })
    });

  }
  onAdd(itemTittle){
    this.todoservice.addTittle(itemTittle.value);
    itemTittle.value=null;

  }
  onDelete($key:string){
    this.todoservice.removeTittle($key);

  }
  alterchceked($key:string,isChecked){
    this.todoservice.checkedorUnchecked($key,!isChecked);

  }

}
