import { IResponse } from '../../../shared/models/response';
import { ISpendingCategoryResponse } from '../../category/models/spending-category-response';
import { CurrencyCodes } from '../../../shared/models/currency-codes';
import { ICurrencyBalance } from './currency-balance';
import { IIncomeResponse } from '../../income/models/income-response';
import { ICurrencyRate } from './currency-rate-response';

export interface IUserStatisticsResponse extends IResponse {
  amount: number;
  mainCurrency: CurrencyCodes;
  spendingCategories: ISpendingCategoryResponse[];
  salaries: IIncomeResponse[];
  currencyBalances: ICurrencyBalance[];
  currencyRates: ICurrencyRate[];
}
