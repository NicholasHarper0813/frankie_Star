import { CommonModule } from '@angular/common';
import { Component,OnDestroy,OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';


@Component({
  selector: 'app-reccomendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reccomendations.component.html',
  styleUrl: './reccomendations.component.css'
})
export class ReccomendationsComponent implements OnInit,OnDestroy {
    foodItem: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';
  constructor(private supabaseService: SupabaseService) { }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.fetchFoodItem();
  }
  async fetchFoodItem() {
    this.loading = true;
    try {
      this.foodItem = await this.supabaseService.getFoodItems();
    } catch (error: any) {
      this.errorMessage = 'Error fetching food items: ' + error.message;
      console.error(this.errorMessage);
    } finally {
      this.loading = false;
    }
  }
}
