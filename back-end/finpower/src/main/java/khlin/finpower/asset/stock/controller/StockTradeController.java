package khlin.finpower.asset.stock.controller;

import khlin.finpower.asset.stock.service.StockTradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("stock/trade")
public class StockTradeController {
    @Autowired
    StockTradeService stockTradeService;
}
