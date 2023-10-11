$import { Product } from 'src/app/common/product';
import { ProductService } from './../../services/product.service';
import{ActivatedRoute} from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  currentCategoryId : number =1;

  constructor(private ProductService:ProductService ,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
    this.listProducts();
  })
  }
  listProducts() {
    const hasategoryId:boolean=this.route.snapshot.paramMap.has('id');
    if(hasategoryId){
      this.currentCategoryId=+this.route.snapshot.paramMap.get('id')!;
    }else{
      this.currentCategoryId=1;
    }


    this.ProductService.getProdutList(this.currentCategoryId).subscribe(
      data=>{
        this.products=data
      }
    )

  }

}
