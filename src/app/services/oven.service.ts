import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OvenDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class OvenService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<OvenDTO[]>('/api/ovens');
  }

  getOne(id: number) {
    return this.http.get<OvenDTO>('/api/ovens/' + id);
  }

  create(oven: OvenDTO) {
    return this.http.post<OvenDTO>('/api/ovens', oven);
  }

  update(oven: OvenDTO) {
    return this.http.put<OvenDTO>('/api/ovens', oven);
  }

  delete(id: number) {
    return this.http.delete('/api/ovens/' + id);
  }

  getLowestFinishTime(){
    return this.http.get<OvenDTO>('/api/lowestfinishoven');
  }
}
