import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { ProductServiceService } from '../../../Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public model: Product[] = [];

  

  constructor(private service: ProductServiceService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetProducts().subscribe((response: Product[]) => {
      this.model = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteProduct(product: Product) {
    let confirmDelete: boolean = confirm(`Delete ${product.name}?`);
    if (confirmDelete) {
      this.service.DeleteProduct(product.id).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
