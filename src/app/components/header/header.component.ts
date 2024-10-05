import { Component } from '@angular/core';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { count } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductPopupComponent , CommonModule,ProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public CartProductArray: any  = [];
  public Count:number = 0;

  AddProduct(product:any){
    if(!this.CartProductArray.includes(product)){
      product.SelectQuantity = 1
      product.TotalPrice = product.price
      this.CartProductArray.push(product);
      this.Count++
      this.CheckOut()
    }else{
      alert("Product Already Added")
    }
    
  }

  RemoveProduct(index:number){
    this.checkoutAmount -= this.CartProductArray[index].TotalPrice

    if(index != -1){
      this.CartProductArray.splice(index , 1)
      this.Count--
    }

  }

  Minus(product:any){
    if(product.SelectQuantity > 1){
      product.SelectQuantity--
      product.TotalPrice = product.SelectQuantity * product.price
      this.checkoutAmount -= product.price
    }
  }

  Plus(product:any){
    product.SelectQuantity++
    product.TotalPrice = product.SelectQuantity * product.price
    this.checkoutAmount += product.price
  }

  checkoutAmount: number = 0;
  CheckOut(){
    this.checkoutAmount = 0
    for(let i = 0 ; i < this.CartProductArray.length ; i++){
      this.checkoutAmount += this.CartProductArray[i].TotalPrice
    }
  }
  
  
}
