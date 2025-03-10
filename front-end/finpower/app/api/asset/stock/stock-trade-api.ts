import type { TradeStockRequest } from "~/types/asset/stock/trade-stock-request";

export async function tradeStock(request: TradeStockRequest) {
  const response = await fetch("http://localhost:8080/stock/trades", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  const stockTrade = await response.json();
  return stockTrade;
}