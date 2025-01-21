package khlin.finpower.user.entity.converter;

import jakarta.persistence.Converter;
import khlin.finpower.common.enums.converter.EnumConverterBase;
import khlin.finpower.user.enums.AccountStatus;

@Converter(autoApply = true)
public class AccountStatusConverter extends EnumConverterBase<AccountStatus, String> {
    public AccountStatusConverter() {
        super(AccountStatus.class);
    }
}
