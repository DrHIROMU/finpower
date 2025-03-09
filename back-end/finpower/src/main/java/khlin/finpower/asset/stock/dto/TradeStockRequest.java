package khlin.finpower.asset.stock.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class TradeStockRequest {
    @NotBlank(message = "Market is required")
    private String market;

    @NotBlank(message = "Trade Type is required")
    private String tradeType;

    @NotBlank(message = "Stock Symbol is required")
    private String stockSymbol;

    @NotBlank(message = "Price is required")
    private BigDecimal price;

    @NotBlank(message = "Quantity is required")
    private BigDecimal quantity;

    @NotBlank(message = "Date is required")
    private String date;

    private String Note;
}
