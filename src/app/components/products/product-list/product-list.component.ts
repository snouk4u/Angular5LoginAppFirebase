import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      });
    });
  }

  onEdit(product: Product){
    this.productService.selectedProduct = Object.assign({},product);
    
  }

  onDelete($key: string){
    if(confirm('Are You Sure You want to Delete It?')){
      this.productService.deleteProduct($key);
    this.toastr.success('Successfull Operation', 'Product Deleted');
    }

  }

}
