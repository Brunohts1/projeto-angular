import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Seller } from '../seller.model';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent implements OnInit {

  seller: Seller = {
    id: 0,
    document: '',
    email: '',
    name: '',
    phone: ''
  }

  constructor(
    private sellerService: SellerService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  
  //traz o formulário preenchido
  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.sellerService.readById(id).subscribe(seller => {
      this.seller = seller;
    });
  }
 
  updateSeller(): void{
    this.sellerService.update(this.seller).subscribe(() => {
      this.sellerService.showMessage('Vendedor atualizado com sucesso!!')
      this.router.navigate(['/sellers']);
    })
  }

  cancel(): void {
    this.router.navigate(['/sellers']);
  }

}
