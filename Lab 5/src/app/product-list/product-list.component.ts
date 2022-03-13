import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products';
import { categories, Category } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categoryList: Product[] | undefined;
  categoryName!: String | undefined;

  constructor(private route: ActivatedRoute){}

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = String(routeParams.get('categoryName'));
    const foundCategory = categories.find(category => category.name === categoryNameFromRoute);
    this.categoryList = foundCategory?.items;
    this.categoryName = foundCategory?.name;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/