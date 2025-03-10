package khlin.finpower.asset.stock.controller;

import jakarta.validation.Valid;
import khlin.finpower.asset.stock.dto.TradeStockRequest;
import khlin.finpower.asset.stock.entity.StockTrade;
import khlin.finpower.asset.stock.service.StockTradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("stock/trades")
public class StockTradeController {
    @Autowired
    StockTradeService stockTradeService;

    @PostMapping
    public ResponseEntity<StockTrade> addStockTrade(@Valid @RequestBody TradeStockRequest tradeStockRequest) {
        StockTrade stockTrade = stockTradeService.saveTrade(tradeStockRequest);
        return new ResponseEntity<>(stockTrade, HttpStatus.CREATED);
    }
}
