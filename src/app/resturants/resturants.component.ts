import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resturants',
  standalone: true,
  imports: [CommonModule,ProgressSpinnerModule],
  templateUrl: './resturants.component.html',
  styleUrl: './resturants.component.css'
})
export class ResturantsComponent implements OnInit, OnDestroy {
  shopItems: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private supabaseService: SupabaseService) {}
  
  ngOnInit(): void {
    this.fetchShopItems();
  }
  
  ngOnDestroy(): void {
    // Cleanup code here
  }
  
  async fetchShopItems() {
    this.loading = true;
    try {
      this.shopItems = await this.supabaseService.getShopItems();
    } catch (error: any) {
      this.errorMessage = 'Error fetching shop items: ' + error.message;
    }
    this.loading = false;
  }

}
