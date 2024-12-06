import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule,ProgressSpinnerModule],
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit, OnDestroy {
  foodItems: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.fetchFoodItems();
  }

  ngOnDestroy(): void {
    // Any necessary cleanup
  }

  async fetchFoodItems() {
    this.loading = true;
    try {
      this.foodItems = await this.supabaseService.getFoodItems();
    } catch (error: any) {
      this.errorMessage = 'Error fetching food items: ' + error.message;
      console.error(this.errorMessage);
    } finally {
      this.loading = false;
    }
  }
}
