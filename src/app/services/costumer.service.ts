import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostumerDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CostumerDTO[]>('/api/costumers');
  }

  getOne(id: number) {
    return this.http.get<CostumerDTO>('/api/costumers/' + id);
  }

  create(costumer: CostumerDTO) {
    return this.http.post<CostumerDTO>('/api/costumers', costumer);
  }

  update(costumer: CostumerDTO) {
    return this.http.put<CostumerDTO>('/api/costumers', costumer);
  }

  delete(id: number) {
    return this.http.delete('/api/costumers/' + id);
  }
}