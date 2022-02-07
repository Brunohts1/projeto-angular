import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Seller } from './seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl = "http://localhost:3000/seller";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>(this.baseUrl, seller)
  }

}
