import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
heroe!:Heroe;
  constructor(
    private activedRouter:ActivatedRoute,
    private service:HeroesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activedRouter.params
    .subscribe(params=>{
      this.service.getHeroe(params.id).subscribe(data=>{
        this.heroe = data;
      })
    })
  }
  regresar(){
    this.router.navigate(['/heroes/listado'])
  }


}
