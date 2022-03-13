import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products, apple_products, huawei_products, xiaomi_products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const categoryNameFromRoute = String(routeParams.get('categoryName'));
    if (categoryNameFromRoute == 'Samsung'){
      this.product = products.find(product => product.id === productIdFromRoute);
    }
    else if (categoryNameFromRoute == 'Apple'){
      this.product = apple_products.find(product => product.id === productIdFromRoute);
    }
    else if (categoryNameFromRoute == 'Huawei'){
      this.product = huawei_products.find(product => product.id === productIdFromRoute);
    }
    else if (categoryNameFromRoute == 'Xiaomi'){
      this.product = xiaomi_products.find(product => product.id === productIdFromRoute);
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
    console.log(product);
  }

}
