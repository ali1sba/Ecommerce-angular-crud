import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductServiceAPI } from '../../services/Product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class AddTutorialComponent implements OnInit {

  product: Product = {};
  statuses: any[]=[];
  submitted: boolean = false ;
  rating: number = 0;


  constructor(private messageService:MessageService,private productServiceAPI: ProductServiceAPI, private route:Router) { }

  ngOnInit(): void {
    

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
  ];
  }



  hideDialog() {
    this.product={}
    this.submitted = false;
}

  saveProduct() {
    this.submitted = true;

    if (this.product.name!.trim()) {
      // alert(this.product.name)
       this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
       console.log(this.product.rating)
       const data = {
        name: this.product.name,
        description:this.product.description,
        price:this.product.price,
        quantity:this.product.quantity,
        inventoryStatus:this.product.inventoryStatus,
        category:this.product.category,
        image:this.product.image,
        rating:this.rating,
      };
  
      this.productServiceAPI.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            
            //this.submitted = true;
          },
          error => {
            console.log(error);
          });
          this.route.navigate(['/Products']);
        //this.products = [...this.products];
        //this.productDialog = false;
        // this.product = {};
    }
}

}
