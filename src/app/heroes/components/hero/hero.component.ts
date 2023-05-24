import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name:string='I ronman';
  age:number= 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

getHeroDescription():string{

  return `${this.name} - ${this.age}`
}

changeHero():void{
  this.name = 'Spiderman';
}

changeAge(){
  this.age = 25;
}

resetForm(){
  this.age = 45
  this.name = 'Ironman'
}

}
