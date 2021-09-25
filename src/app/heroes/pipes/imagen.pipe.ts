import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe, ...args: unknown[]): string {
    if(!heroe.id){
      return '../../../../assets/user.png'
    }else if(heroe.alt_img){
      return heroe.alt_img;
    }
    return `../../../../assets/heroes/${heroe.id}.jpg`;
  }

}
