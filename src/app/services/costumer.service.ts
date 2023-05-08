import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostumerDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CostumerDTO[]>('/api/costumer');
  }
}