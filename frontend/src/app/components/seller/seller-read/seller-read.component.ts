import { SellerService } from './../seller.service';
import { Seller } from './../seller.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-read',
  templateUrl: './seller-read.component.html',
  styleUrls: ['./seller-read.component.css']
})
export class SellerReadComponent implements OnInit {

  sellers: Seller[] = [];
  displayedColumns = ['id', 'name', 'email', 'action']

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.read().subscribe(sellers => {
      this.sellers = sellers
      console.log(sellers)
    })
  }

}
