export type TradeStockRequest = {
  market: StockMarket;
  type: TradeType;
  stockCode: string;
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
