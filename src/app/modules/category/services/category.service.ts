import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { ISpendingCategoryResponse } from '../models/spending-category-response';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient, private config: ConfigurationService) {}

  getUserCategories() {
    return this._httpClient
      .get<ISpendingCategoryResponse[]>(this.config.getSpendingCategoriesUrl())
      .pipe(tap((data) => console.log('Obtained user categories: ', JSON.stringify(data))));
  }

  removeCategory(id: string) {
    return this._httpClient
      .delete(this.config.getSpendingCategoriesUrl() + '/' + id)
      .pipe(tap((response) => console.log('category deletion response: ' + response)));
  }
}
