package khlin.finpower.asset.stock.entity;

import jakarta.persistence.*;
import khlin.finpower.asset.stock.enums.TradeType;
import khlin.finpower.common.entity.UserAccessibleEntity;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name ="stock_trade")
@EqualsAndHashCode(callSuper=true)
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class StockTrade extends UserAccessibleEntity {
    @Column(name = "market", nullable = false, length = 20)
    private String market;

    @Enumerated(EnumType.STRING)
    @Column(name = "trade_type", nullable = false, length = 4)
    private TradeType tradeType;

    @Column(name = "stock_symbol", nullable = false, length = 50)
    private String stockSymbol;

    @Column(name = "currency", nullable = false, length = 10)
    private String currency;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "quantity", nullable = false)
    private BigDecimal quantity;

    @Column(name = "total_cost", nullable = false)
    private BigDecimal totalCost;

    @Column(name = "fee")
    private BigDecimal fee;

    @Column(name = "tax")
    private BigDecimal tax;

    @Column(name = "broker")
    private String broker;

    @Column(name = "order_id")
    private String orderId;

    @Column(name = "trade_date", nullable = false)
    private Instant tradeDate;

    @Column(name = "note", length = 2000)
    private String note;
}
