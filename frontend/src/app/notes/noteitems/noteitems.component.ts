import { Component, OnInit, Input } from '@angular/core';
import {Note} from "../../interfaces/Note";


@Component({
  selector: 'app-noteitems',
  templateUrl: './noteitems.component.html',
  styleUrls: ['./noteitems.component.css']
})
export class NoteitemsComponent implements OnInit {

  @Input("notelist") inputList:Note[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputList)
  }

}
