import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderitemDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<OrderitemDTO[]>('/api/orderitems');
  }

  getOne(id: number) {
    return this.http.get<OrderitemDTO>('/api/orderitems/' + id);
  }

  create(orderitem: OrderitemDTO) {
    return this.http.post<OrderitemDTO>('/api/orderitems', orderitem);
  }

  update(orderitem: OrderitemDTO) {
    return this.http.put<OrderitemDTO>('/api/orderitems', orderitem);
  }

  delete(id: number) {
    return this.http.delete('/api/orderitems/' + id);
  }

  getOrderItemsByOrder(id: number) {
    return this.http.get<OrderitemDTO[]>('/api/orderitemsbyorder', {
      params: { id }
    });
  }
}
