import { SellerService } from './../seller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-create',
  templateUrl: './seller-create.component.html',
  styleUrls: ['./seller-create.component.css']
})
export class SellerCreateComponent implements OnInit {

  constructor(private sellerService: SellerService,
      private router: Router) { }

  ngOnInit(): void {
  }
  
  createSeller(): void {
    this.sellerService.showMessage('Operação executada com sucesso');

  }

  cancel(): void {
    this.router.navigate(['/sellers'])
  }

}
