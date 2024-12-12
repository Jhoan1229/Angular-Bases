import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Mujer maravilla', 'Batman', 'Zeus', 'Kratos'];
  public deleteHero?: string;

  removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }

}
