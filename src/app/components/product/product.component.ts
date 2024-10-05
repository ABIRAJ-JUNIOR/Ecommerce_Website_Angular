
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ProductPopupComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productItems: any[] = [
    {
      id: 1,
      name: 'Black T-shirt',
      images: [
        'https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 100,
      description: ['Comfortable black cotton t-shirt', 'Slim fit'],
      rating: 4,
      materials: [
        { id: 1, name: 'Cotton' },
        { id: 2, name: 'Polyester' },
        { id: 3, name: 'Elastane' },
      ],
      colors: [
        { id: 1, name: 'Black' },
        { id: 2, name: 'Gray' },
        { id: 3, name: 'White' },
      ],
      availableQty: 20,
    },
    {
      id: 2,
      name: 'White T-shirt',
      images: [
        'https://assets.designhill.com/resize_img.php?atyp=st_page_file&pth=ft_bt_th7igwli_org||BT304112||two_heading_7images_gallery_with_link_image6_img&flp=1577447847-13660527105e05f1a7202e79-89455419.jpg',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 120,
      description: ['Classic white t-shirt', 'Crew neck'],
      rating: 5,
      materials: [
        { id: 1, name: 'Cotton' },
        { id: 2, name: 'Linen' },
        { id: 3, name: 'Spandex' },
      ],
      colors: [
        { id: 1, name: 'White' },
        { id: 2, name: 'Blue' },
        { id: 3, name: 'Red' },
      ],
      availableQty: 0,
    },
    {
      id: 3,
      name: 'Gray T-shirt',
      images: [
        'https://img.freepik.com/premium-vector/tshirt-design-new-tshirt-design-modern-tshirt-design-illustratior_955289-2621.jpg',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 110,
      description: ['Soft gray t-shirt', 'Regular fit'],
      rating: 3,
      materials: [
        { id: 1, name: 'Cotton' },
        { id: 2, name: 'Nylon' },
        { id: 3, name: 'Rayon' },
      ],
      colors: [
        { id: 1, name: 'Gray' },
        { id: 2, name: 'Black' },
        { id: 3, name: 'Green' },
      ],
      availableQty: 25,
    },
    {
      id: 4,
      name: 'Navy Blue T-shirt',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ReDzCB815-68cShEv-ZOJKa0EcuQOKvvw&s',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 105,
      description: ['Navy blue t-shirt with pocket', 'Casual style'],
      rating: 4,
      materials: [
        { id: 1, name: 'Polyester' },
        { id: 2, name: 'Cotton' },
        { id: 3, name: 'Spandex' },
      ],
      colors: [
        { id: 1, name: 'Navy' },
        { id: 2, name: 'White' },
        { id: 3, name: 'Black' },
      ],
      availableQty: 10,
    },
    {
      id: 5,
      name: 'Red T-shirt',
      images: [
        'https://veirdo.in/cdn/shop/files/8_2be593bf-344e-4f3a-8a4b-bed67331917f.jpg?v=1725445401',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 130,
      description: ['Vibrant red t-shirt', 'V-neck'],
      rating: 5,
      materials: [
        { id: 1, name: 'Cotton' },
        { id: 2, name: 'Rayon' },
        { id: 3, name: 'Elastane' },
      ],
      colors: [
        { id: 1, name: 'Red' },
        { id: 2, name: 'Black' },
        { id: 3, name: 'White' },
      ],
      availableQty: 18,
    },
    {
      id: 6,
      name: 'Green T-shirt',
      images: [
        'https://urbantheka.in/cdn/shop/files/bandana-white-print-tshirt.jpg?v=1704188069',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 115,
      description: ['Forest green t-shirt', 'Relaxed fit'],
      rating: 4,
      materials: [
        { id: 1, name: 'Cotton' },
        { id: 2, name: 'Spandex' },
        { id: 3, name: 'Polyester' },
      ],
      colors: [
        { id: 1, name: 'Green' },
        { id: 2, name: 'Black' },
        { id: 3, name: 'White' },
      ],
      availableQty: 12,
    },
    {
      id: 7,
      name: 'Yellow T-shirt',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTEL2ADxDJOJlXpicSIHkMXe6S4CwRHYelg&s',
        'https://i.pinimg.com/736x/8e/90/29/8e9029a8a715269cdf5742eac35894fd.jpg',
      ],
      price: 125,
      description: ['Bright yellow t-shirt', 'Round neck'],
      rating: 4,
      materials: [
        { id: 1, name: 'Linen' },
        { id: 2, name: 'Cotton' },
        { id: 3, name: 'Rayon' },
      ],
      colors: [
        { id: 1, name: 'Yellow' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'White' },
      ],
      availableQty: 22,
    },
  ];
  
  public selectedProduct:any = null;

  @Output() product = new EventEmitter();

  AddProduct(product:any){
    this.product.emit(product)
  }

  
}
