import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductServiceAPI } from '../../services/Product.service';
import {SelectItem} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import {MessageService} from 'primeng/api';




@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class TutorialsListComponent implements OnInit {

  products: Product[]=[];
  sortOptions: SelectItem[]=[];
  sortOrder: number = 0;
  sortField: string ='';
  sortKey: string=';'
  productDialog : Product={};
  display: boolean = false;

  product: Product = {};
  statuses: any[]=[];
  submitted: boolean = false ;


  currentIndex = -1;
  title = '';
  tutorial: Product={}

  constructor(private productServiceAPI: ProductServiceAPI, private messageService: MessageService,  private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
    //this.productService.getProducts().then(data => this.products = data);

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.statuses = [
          {label: 'INSTOCK', value: 'instock'},
          {label: 'LOWSTOCK', value: 'lowstock'},
          {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
  }

  retrieveTutorials(): void {
    this.productServiceAPI.getAll().then(
        data => {
          this.products = data;
          console.log(data);
        })
  }
  editProduct(product: Product) {
    this.productDialog = {...product};
    this.display = true;
}


  searchTitle(): void {
    this.currentIndex = -1;

    this.productServiceAPI.findByTitle(this.title)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

hideDialog() {
  this.display = false;
}

saveProduct(_id:any){
  this.submitted = true;
      
    if (this.productDialog.name!.trim()) {
      // alert(this.product.name)
      const data = {
        name: this.productDialog.name,
        description:this.productDialog.description,
        price:this.productDialog.price,
        quantity:this.productDialog.quantity,
        inventoryStatus:this.productDialog.inventoryStatus,
        category:this.productDialog.category,
        image:this.productDialog.image,
        rating:this.productDialog.rating,
      };
    this.display = false;
    this.retrieveTutorials();
      this.productServiceAPI.update(_id, data)
        .subscribe(
          response => {
            
          },
          error => {
            console.log(error);
          });
}
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product updated', life: 3000});
}
deleteProduct( id :any, product: any ){
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + product.name + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.productServiceAPI.delete(id)
      .subscribe(
        response => {
          
        },
        error => {
          console.log(error);
        });
        this.retrieveTutorials();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    }
});
 
  
}



}
