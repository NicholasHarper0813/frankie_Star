import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FoodsComponent } from './foods/foods.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ResturantsComponent,SearchbarComponent,HeroComponent,ReccomendationsComponent,FoodsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frankie';

  name: String = "Frankie";

  defaul: number = 1;
  

    AddNumber(figure: number) {
  this.defaul = this.defaul + figure;
}}
