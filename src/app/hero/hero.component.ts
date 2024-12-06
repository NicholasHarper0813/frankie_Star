import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [InputTextModule,FormsModule,ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  value: string | undefined;

}
