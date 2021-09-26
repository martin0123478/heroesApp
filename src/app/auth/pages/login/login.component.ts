import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private rout:Router,
    private authService:AuthService) { }

 login(){
   //ir al backend
   //un usuario
   this.authService.login()
   .subscribe(auth=>{
     console.log(auth)
     if(auth.id){
       this.rout.navigate(['./heroes'])
     }
   })
  
 }



}
