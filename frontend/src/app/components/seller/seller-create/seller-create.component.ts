import { SellerService } from './../seller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller.model';

@Component({
  selector: 'app-seller-create',
  templateUrl: './seller-create.component.html',
  styleUrls: ['./seller-create.component.css']
})
export class SellerCreateComponent implements OnInit {

  seller: Seller = {
    id: 0,
    document: '',
    email: '',
    name: '',
    phone: ''
  }

  constructor(private sellerService: SellerService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createSeller(): void {
    this.sellerService.create(this.seller).subscribe(() => {
      this.sellerService.showMessage('Vendedor Criado')
      this.router.navigate(['/sellers'])
    })

    
  }
  cancel(): void {
    this.router.navigate(['/sellers'])
  }
}
