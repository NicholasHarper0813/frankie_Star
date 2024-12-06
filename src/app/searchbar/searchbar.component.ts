import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [InputTextModule,FormsModule,ButtonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  value: string = '';
}
