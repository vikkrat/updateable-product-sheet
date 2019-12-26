import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// -----------------------------------------------------------------
import { MockAPIService } from '../services/mock-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm: FormGroup;

  public categories: string[] = [];
  private categorySubs$: Subscription;

  constructor(private zone: NgZone,
              private router: Router,
              private formBuilder: FormBuilder,
              private mockAPIService: MockAPIService) { }

  ngOnInit() {
    this.getCategories();
    this.addProduct();
  }

  addProduct() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  getCategories() {
    this.categorySubs$ = this.mockAPIService.loadСategories()
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories);
      });
  }

  submitForm() {
    this.mockAPIService.addProduct(this.productForm.value).subscribe( () => {
      console.log('Product added!');
      this.zone.run( () => {
        this.router.navigate(['/product-item']);
      });
    });
  }


  ngOnDestroy(): void {
    this.categorySubs$.unsubscribe();
  }

}
