package khlin.finpower.asset.stock.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import khlin.finpower.asset.stock.enums.TradeType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
public class TradeStockRequest {
    @NotBlank(message = "Market is required")
    private String market;

    @NotNull(message = "Trade Type is required")
    private TradeType tradeType;

    @NotBlank(message = "Stock Symbol is required")
    private String stockSymbol;

    @NotBlank(message = "Curreny is required")
    private String currency;

    @Positive(message = "Price is required")
    private BigDecimal price;

    @Positive(message = "Quantity is required")
    private BigDecimal quantity;

    @NotNull(message = "Date is required")
    private Instant tradeDate;

    private String note;
}
