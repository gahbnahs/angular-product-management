import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string ="Product Detail"
  product:IProduct=null;
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private router:Router
              ) { }

  ngOnInit() {

     const id = +this.route.snapshot.paramMap.get('id');
    if(isNaN(id) || id < 1)
    {
      console.log(`you are looking for a product with incorrect string ${id}`)
      this.router.navigate(['notfound']);
      return;
    }
    
    this.productService.getProducts().subscribe(
       products =>
        {
          this.product = products.find(p=>p.productId === id);
        },
       
         err=>
        {
           console.log(err);
        }
       
       );
      }

      onBack():void{

      this.router.navigate(['products']);
      }
    

}
