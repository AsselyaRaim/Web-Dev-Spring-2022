import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  shownGallery: boolean;
  text: string;
  likes: Number;
  isHidden = false;
  @Input() product!: Product;
  @Input() categoryName: String | undefined;

  constructor() {
    this.shownGallery = false;
    this.text = "Show gallery";
    this.likes = 0;
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

  onLikeClick() {
    this.likes = +this.likes + 1;
  }

  removeElement() {
    this.isHidden = true;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
