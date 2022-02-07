import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Seller } from './seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl = "http://localhost:3000/seller";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean =false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>(this.baseUrl, seller).pipe(
      map((obj )=> obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    console.log(e)
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }

  read(): Observable<Seller[]>{
    return this.http.get<Seller[]>(this.baseUrl)
  }

  readById(id: string): Observable<Seller> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Seller>(url)
  }

  update(seller: Seller): Observable<Seller>{
    const url = `${this.baseUrl}/${seller.id}`
    return this.http.put<Seller>(url, seller)
  }

  delete(id: number): Observable<Seller>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Seller>(url);
  }

}
