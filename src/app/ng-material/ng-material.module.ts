import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ----------Angular Material-------------
import {
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

const NgMaterialComponents = [
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMaterialComponents
  ],
  exports: [
    NgMaterialComponents
  ]
})
export class NgMaterialModule { }
