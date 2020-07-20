import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Note} from "./interfaces/Note";


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  sendPost(payload:Note){
    return this.http.post(environment.endpoint, payload).toPromise();
  }
  getNotes(){
    return this.http.get<Note[]>(environment.endpoint).toPromise();
  }
}
