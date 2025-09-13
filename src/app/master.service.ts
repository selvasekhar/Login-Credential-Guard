import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  
  service = inject(HttpClient)
  services = inject(HttpClient)

  constructor() { }

  getalldatasone(){
    return this.service.get("https://jsonplaceholder.typicode.com/todos")
  }


}
