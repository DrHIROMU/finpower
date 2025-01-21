package khlin.finpower.user.enums;

import khlin.finpower.common.enums.EntityFieldEnumBase;

public enum AccountStatus implements EntityFieldEnumBase<String> {
    ACTIVE("1"),
    INACTIVE("0");

    private String code;

    AccountStatus(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public static AccountStatus fromCode(String code) {
        if(code == null) return null;

        for (AccountStatus status : AccountStatus.values()) {
            if (status.getCode().equals(code)) {
                return status;
            }
        }
        return null;
    }
}
