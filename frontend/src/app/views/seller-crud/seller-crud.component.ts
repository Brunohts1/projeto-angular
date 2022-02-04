import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-crud',
  templateUrl: './seller-crud.component.html',
  styleUrls: ['./seller-crud.component.css']
})
export class SellerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

navigateToProductCreate(): void {
  this.router.navigate(['sellers/create'])
}

}
