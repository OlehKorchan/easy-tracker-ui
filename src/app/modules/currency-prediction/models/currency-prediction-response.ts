export interface ICurrencyPredictionResponse {
  date: Date;
  upperBound: number;
  prediction: number;
  lowerBound: number;
}
