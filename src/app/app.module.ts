import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// -----------------------------------------------------------------
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// -----------------------------------------------------------------
import { NgMaterialModule } from './ng-material/ng-material.module';
// -----------------------------------------------------------------
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MockAPIService } from './services/mock-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MockAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
