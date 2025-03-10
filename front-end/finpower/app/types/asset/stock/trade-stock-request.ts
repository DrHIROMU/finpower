export type TradeStockRequest = {
  market: string;
  tradeType: string;
  stockSymbol: string;
  currency: string;
  price: number;
  quantity: number;
  tradeDate: string;
  note: string;
};

export enum StockMarket {
  TW = "TW",
  US = "US",
}

export enum TradeType {
  BUY = "BUY",
  SELL = "SELL",
}
