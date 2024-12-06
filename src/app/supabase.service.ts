import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zzskcvemurwhxnpemfzm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6c2tjdmVtdXJ3aHhucGVtZnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2NjEyMjEsImV4cCI6MjAzNjIzNzIyMX0.veEiZBnvPRQenkrh7CmB2Xbb9X4mpZBH-zMzR5Mmp5w';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabase;
  }

  async getShopItems(): Promise<any[]>{
    try {
      const { data, error } = await this.supabase
        .from("restaurants")
        .select('*')
        .limit(4)
      
      if (error) {
        console.error("Error Fetching Resturants", error)
        return []
      }
      return data;
    } catch (error) {
      console.error("Error Fetching Resturants", error)
      return []
    }
  }
  async getFoodItems(): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('food_items')
        .select('*')
        .limit(4);

      if (error) {
        console.error('Error fetching food items:', error);
        return [];
      }

      return data;
    } catch (error) {
      console.error('Error fetching food items:', error);
      return [];
    }
  }
}
