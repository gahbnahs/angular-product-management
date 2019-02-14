import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  
  pageTitle: string ="Product List";
  errorMessage:string;
  _listFilter:string;
  get listFilter():string{
    return this._listFilter;
  };
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter):this.products;
  }
  filteredProducts:IProduct[];
  showImage:boolean=false;
  products :IProduct[];
  
  constructor(private productService:ProductService) {
    console.log('constructor!')
   }

  ngOnInit() {
    console.log('onInit!')

    this.productService.getProducts().subscribe(
    products=> 
    {
      console.log(products.length);
      this.products = products;
      this.filteredProducts= this.products;
    },
    error=> 
    {
      this.errorMessage = <any> error;
      console.log(this.errorMessage);
    }
    );
    
  }

  toggleImage(){
      this.showImage=!this.showImage;
  }

  performFiltering(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    //console.log(this.products.length)
    return this.products.filter((product:IProduct)=>
    
      product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1
    
    );

    }
    starComponentRatingClicked(message:string){
      console.log('starComponentRatingClicked'+ message);
    }
}
