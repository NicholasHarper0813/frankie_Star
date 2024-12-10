import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-resturants',
  standalone: true,
  templateUrl: './resturants.component.html',
  styleUrl: './resturants.component.css',
  imports: [CommonModule,ProgressSpinnerModule]
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
    //this.destroy();
    //all format
  }
  
  async fetchShopItems() {
    this.loading = true;
    try {
      this.shopItems = await this.supabaseService.getShopItems();
    } 
    catch (error: any) {
      this.errorMessage = 'Error fetching shop items: ' + error.message;
    }
    this.loading = false;
  }
}
