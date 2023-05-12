import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ISpendingCategoryResponse
} from 'src/app/modules/category/models/spending-category-response';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-statistics',
  templateUrl: './categories-statistics.component.html',
  styleUrls: ['./categories-statistics.component.css'],
})
export class CategoriesStatisticsComponent implements OnInit, OnDestroy {
  public categoriesResponse: ISpendingCategoryResponse[] = [];
  public categoriesSubscription!: Subscription;

  public constructor(private _categoryService: CategoryService) {}

  public deleteCategory(id: string) {
    this._categoryService.removeCategory(id).subscribe({
      next: () => this.ngOnInit(),
      error: (error) => console.error('Category deletion error: ', error?.error?.errorMessage),
    });
  }

  public ngOnInit(): void {
    this.categoriesSubscription = this._categoryService.getUserCategories().subscribe({
      next: (response) => (
        this.categoriesResponse = response
      ),
      error: (error) => console.error(error?.error?.errorMessage),
    });
  }

  public ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
