import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RestaurantForm } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get('http://localhost:3000/restaurants')
  }

  getOne(id: string){
    return this.httpClient.get(`http://localhost:3000/restaurants/${id}`)
  }

  patch(data: RestaurantForm, id: string){
    return this.httpClient.patch(`http://localhost:3000/restaurants/${id}`, data)
  }

  post(data: RestaurantForm){
    return this.httpClient.post('http://localhost:3000/restaurants', data)
  }

  delete(id: string){
    return this.httpClient.delete(`http://localhost:3000/restaurants/${id}`)
  }
}
