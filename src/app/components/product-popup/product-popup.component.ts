import { Component, Input } from '@angular/core';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,CommonModule],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.css'
})
export class ProductPopupComponent {
formGroup: any;

  @Input() product:any = null;

  selectedImage:string = '';
  
  changeImage(imagePath:string){
    this.selectedImage = imagePath
  }

}
