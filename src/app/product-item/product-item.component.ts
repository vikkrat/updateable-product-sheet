import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// ---------------------------------------------------------
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
// ---------------------------------------------------------
import { MockAPIService } from '../services/mock-api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, AfterViewInit, OnDestroy {
  public products: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'category'];
  dataSource: MatTableDataSource<unknown> = new MatTableDataSource();
  private productsSubs$: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private mockAPIService: MockAPIService) { }

  ngOnInit() {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getProducts() {
    this.productsSubs$ = this.mockAPIService.loadProducts()
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
        this.dataSource.data = this.products;
      });
  }

  ngOnDestroy() {
    this.productsSubs$.unsubscribe();
  }

}
