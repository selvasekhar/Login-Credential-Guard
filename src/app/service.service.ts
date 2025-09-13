import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  service = inject(HttpClient);

  constructor() {}

  getalldatastwo() {
    return this.service.get('https://jsonplaceholder.typicode.com/photos');
  }
}
