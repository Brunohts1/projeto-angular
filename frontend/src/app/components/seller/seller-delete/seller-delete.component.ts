import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from './../seller.service';
import { Seller } from './../seller.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-delete',
  templateUrl: './seller-delete.component.html',
  styleUrls: ['./seller-delete.component.css']
})
export class SellerDeleteComponent implements OnInit {
  seller: Seller = {
    id: 0,
    document: '',
    email: '',
    name: '',
    phone: ''
  }
  
  constructor(private sellerService: SellerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.sellerService.readById(id).subscribe(seller => {
      this.seller = seller
    })
  }

  deleteSeller(): void {
    this.sellerService.delete(this.seller.id).subscribe(() => {
      this.sellerService.showMessage('Vendedor Excluido com Sucesso');
      this.router.navigate(['/sellers']);
    })
  }

  cancel(): void {
    this.router.navigate(['/sellers'])
  }

}
