import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tradesmen-data-list',
  standalone: true,
  imports: [DataViewModule, RatingModule, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [AppService],
  templateUrl: './tradesmen-data-list.component.html',
  styleUrl: './tradesmen-data-list.component.scss'
})
export class TradesmenDataListComponent {

  products!: Product[];
  layout: 'list' | 'grid' = 'list';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProducts().then((data) => (this.products = data));
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
}


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}