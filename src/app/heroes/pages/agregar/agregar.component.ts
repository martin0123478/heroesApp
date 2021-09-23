import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
heroe!:Heroe;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params
    .subscribe(params=>{
      console.log(params.id)
    })
  }

}
