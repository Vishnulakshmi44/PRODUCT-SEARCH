import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  productdetails: any = {}
  searchkey: any;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getproducts().subscribe((data: any) => {
      console.log(data.products);
      this.productdetails = data.products

    })
  }
  search(event: any) {
    console.log(event.target.value);
    this.searchkey = event.target.value
  }
}
