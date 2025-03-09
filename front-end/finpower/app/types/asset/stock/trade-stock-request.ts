export type TradeStockRequest = {
  market: string;
  tradeType: string;
  stockSymbol: string;
  price: number;
  quantity: number;
  date: string;
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
