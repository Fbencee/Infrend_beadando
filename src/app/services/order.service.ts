import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<OrderDTO[]>('/api/orders');
  }

  getOne(id: number) {
    return this.http.get<OrderDTO>('/api/orders/' + id);
  }

  create(order: OrderDTO) {
    return this.http.post<OrderDTO>('/api/orders', order);
  }

  update(order: OrderDTO) {
    return this.http.put<OrderDTO>('/api/orders', order);
  }

  delete(id: number) {
    return this.http.delete('/api/orders/' + id);
  }
}
