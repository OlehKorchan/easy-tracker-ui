import { IResponse } from './response';
import { ISpendingCategoryResponse } from './spending-category-response';
import { IIncomeResponse } from './income-response';
import { CurrencyCodes } from './currency-codes';
import { ICurrencyBalance } from './currency-balance';
import { ICurrencyRate } from './currency-rate-response';

export interface IUserStatisticsResponse extends IResponse {
  amount: number;
  mainCurrency: CurrencyCodes;
  spendingCategories: ISpendingCategoryResponse[];
  salaries: IIncomeResponse[];
  currencyBalances: ICurrencyBalance[];
  currencyRates: ICurrencyRate[];
}
