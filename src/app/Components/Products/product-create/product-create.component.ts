import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { ProductServiceService } from '../../../Services/product-service.service';
import { Router } from '@angular/router';
import { EnumHelper, Size, Variant } from '../../../Models/variant';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  public model!: Product;
  public types!: string[];


  sizes = EnumHelper.getEnumArray(Size);
  selectedSize: Size = Size.Medium;

  constructor(private Services: ProductServiceService, private router: Router) {

  }
  ngOnInit(): void {


    this.model = new Product();
    this.Services.GetTypes().subscribe((data) => {
      this.types = data;
    });
 

  }


  OnSubmit() {

    this.Services.SaveProduct(this.model).subscribe({
      next: () => {
        this.router.navigate(["ProductList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddVariant() {

    this.model.variants.push(new Variant());

  }

  DeleteVariant(index: number) {

    const remItem = this.model.variants.splice(index, 1);
  }
}
