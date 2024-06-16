import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { EnumHelper, Size, Variant } from '../../../Models/variant';
import { ProductServiceService } from '../../../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  public model!: Product;
  public types!: string[];
  id!: number;

  sizes = EnumHelper.getEnumArray(Size);
  selectedSize: Size = Size.Medium;

  constructor(private Services: ProductServiceService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.model = new Product();
    this.LoadData();
    this.Services.GetTypes().subscribe((data) => {
      this.types = data;
    });


  }


  OnSubmit() {


    this.Services.UpdateProduct(this.model).subscribe({
      next: () => {
        this.router.navigate(['ProductList']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Services.GetProduct(this.id).subscribe((data: Product) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  AddVariant() {

    this.model.variants.push(new Variant());

  }

  DeleteVariant(index: number) {

    const remItem = this.model.variants.splice(index, 1);
  }
}
