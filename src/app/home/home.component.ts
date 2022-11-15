import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
listData:any = [];

title = 'Product List';

  constructor(private service: ProductServiceService) { }

  ngOnInit() {
    this.refreshProList();
    }

    refreshProList(){
      this.service.getProductList().subscribe((res) => {
        console.log(res,"res==");
        this.listData = res.data;
      });
    }


}
