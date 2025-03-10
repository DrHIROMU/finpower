package khlin.finpower.asset.stock.service;

import khlin.finpower.asset.stock.dto.TradeStockRequest;
import khlin.finpower.asset.stock.entity.StockTrade;
import khlin.finpower.asset.stock.repository.StockTradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockTradeService {
    @Autowired
    private StockTradeRepository stockTradeRepository;

    public StockTrade saveTrade(TradeStockRequest tradeStockRequest) {
        StockTrade stockTrade = StockTrade.builder()
                .market(tradeStockRequest.getMarket())
                .tradeType(tradeStockRequest.getTradeType())
                .stockSymbol(tradeStockRequest.getStockSymbol())
                .currency(tradeStockRequest.getCurrency())
                .price(tradeStockRequest.getPrice())
                .quantity(tradeStockRequest.getQuantity())
                .totalCost(tradeStockRequest.getPrice().multiply(tradeStockRequest.getQuantity()))
                .tradeDate(tradeStockRequest.getTradeDate())
                .note(tradeStockRequest.getNote())
                .build();
        return stockTradeRepository.save(stockTrade);
    }
}
