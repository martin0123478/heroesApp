import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin:10px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private rout:Router,
    private authservice:AuthService) { }
get auth(){
  return this.authservice.auth;
}
  ngOnInit(): void {
  }
  logout(){
    //ir al backend
    //un usuario
    this.rout.navigate(['./auth'])
  }

}
