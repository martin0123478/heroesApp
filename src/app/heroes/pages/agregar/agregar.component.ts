import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  
    
  `
  ]
})
export class AgregarComponent implements OnInit {
publishers = [
  {
    id:'DC Comics',
    desc:'DC-Comics'
  },
  {
    id:'Marvel Comics',
    desc:'Marvel-Comics'
  }
]
heroe:Heroe={
  superhero:'',
  alter_ego:'',
  characters:'',
  first_appearance:'',
  publisher:Publisher.DCComics,
  alt_img:''

}
  constructor(private service:HeroesService,
    private activatedRute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRute.params
    .pipe(
      switchMap(({id})=>this.service.getHeroe(id))
    )
    .subscribe(hero=>this.heroe=hero)
    
  }
  guardar(){
    if(this.heroe.id){
      //actualizar
      this.service.editHero(this.heroe)
      .subscribe(hero=>{console.log('actualizado',hero)})
    }
    else{
      this.service.addHero(this.heroe)
    .subscribe(heroe=>{
      this.router.navigate(['/heroes',heroe.id])
    })
    }
    
  }
  borrarHeroe(){
    this.service.borrarHero(this.heroe.id!)
    .subscribe(resp=>{
      this.router.navigate(['/heroes/listado'])
    })
  }

}
