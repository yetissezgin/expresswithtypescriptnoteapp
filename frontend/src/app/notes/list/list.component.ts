import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {NoteService} from "../../note.service";
import {Note} from "../../interfaces/Note";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  noteList:Note[];

  noteForm = new FormGroup({
    note:new FormControl("", [
      Validators.required
    ])
  })
  constructor(private service:NoteService) {}

  ngOnInit(): void {
    this.service.getNotes().then(result=>{
      this.noteList=result;
    })
  }

  submitHandler(){
    let payload={...this.noteForm.value, author:"yetis"}
    this.service.sendPost(payload).then(result=>{
      console.log(result)
    })
  }

}
