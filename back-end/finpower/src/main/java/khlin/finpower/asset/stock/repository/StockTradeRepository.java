package khlin.finpower.asset.stock.repository;

import khlin.finpower.asset.stock.entity.StockTrade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockTradeRepository extends JpaRepository<StockTrade, String> {
}
