import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/components/seller/seller.model';
import { SellerService } from 'src/app/components/seller/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sellers: Seller[] = [];
  displayedColumns = ['id', 'name', 'email', 'action']

  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerService.read().subscribe(sellers => {
      this.sellers = sellers
      console.log(sellers)
    })
  }

  navigateToSellers(){
    this.router.navigate(['/sellers'])
  }

}

