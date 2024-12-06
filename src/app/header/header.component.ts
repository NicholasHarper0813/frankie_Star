import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ImageModule } from "primeng/image";
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputIconModule,IconFieldModule,InputTextModule,FormsModule,ImageModule,ButtonModule,BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  value: number = 2;
}
