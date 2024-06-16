import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { ProductServiceService } from '../../../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  public model!: Product;
  id!: number;


  constructor(private Service: ProductServiceService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }

  LoadData() {
    this.Service.GetProduct(this.id).subscribe((data: Product) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }


}
