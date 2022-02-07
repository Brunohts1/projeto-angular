import { Seller } from './../seller.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Seller[] = [
  {id: 1, name: 'Hydrogen', email: "email@email.com"},
  {id: 2, name: 'Helium', email: "email@email.com"},
  {id: 3, name: 'Lithium', email: "email@email.com"},
  {id: 4, name: 'Beryllium', email: "email@email.com"},
  {id: 5, name: 'Boron', email: "email@email.com"},
  {id: 6, name: 'Carbon', email: "email@email.com"},
  {id: 7, name: 'Nitrogen', email: "email@email.com"},
  {id: 8, name: 'Oxygen', email: "email@email.com"},
  {id: 9, name: 'Fluorine', email: "email@email.com"},
  {id: 10, name: 'Neon', email: "email@email.com"},
  {id: 11, name: 'Sodium', email: "email@email.com"},
  {id: 12, name: 'Magnesium', email: "email@email.com"},
  {id: 13, name: 'Aluminum', email: "email@email.com"},
  {id: 14, name: 'Silicon', email: "email@email.com"},
  {id: 15, name: 'Phosphorus', email: "email@email.com"},
  {id: 16, name: 'Sulfur', email: "email@email.com"},
  {id: 17, name: 'Chlorine', email: "email@email.com"},
  {id: 18, name: 'Argon', email: "email@email.com"},
  {id: 19, name: 'Potassium', email: "email@email.com"},
  {id: 20, name: 'Calcium', email: "email@email.com"}
];

/**
 * Data source for the SellerRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SellerRead2DataSource extends DataSource<Seller> {
  data: Seller[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Seller[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Seller[]): Seller[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Seller[]): Seller[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
