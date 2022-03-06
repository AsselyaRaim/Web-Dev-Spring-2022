import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  shownGallery: boolean;
  text: string;
  @Input() product!: Product;

  constructor() {
    this.shownGallery = false;
    this.text = "Show gallery";
  }

  ngOnInit(): void {}

  showGallery(){
    if(this.shownGallery){
      this.shownGallery = false;
      this.text = "Show gallery";
    }
    else {
      this.shownGallery = true;
      this.text = "Hide gallery";
    }
  }
}
