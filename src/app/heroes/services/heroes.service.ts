import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
private baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

  getHeroes(){
   return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }
  getHeroe(id:string){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino:string){
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  addHero(heroe:Heroe){
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe)
  }
  editHero(heroe:Heroe){
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe)
  }
  borrarHero(id:string){
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }
  
}
