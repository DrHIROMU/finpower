package khlin.finpower.common.enums.converter;

import jakarta.persistence.AttributeConverter;
import khlin.finpower.common.enums.EntityFieldEnumBase;

import java.util.Arrays;

public abstract class EnumConverterBase<T extends Enum<T> & EntityFieldEnumBase<E>, E> implements
        AttributeConverter<T, E> {
    private final Class<T> enumClass;

    public EnumConverterBase(Class<T> enumClass) {
        this.enumClass = enumClass;
    }

    @Override
    public E convertToDatabaseColumn(T valueEnum) {
        return valueEnum != null ? valueEnum.getCode() : null;
    }

    @Override
    public T convertToEntityAttribute(E enumCode) {
        if (enumCode == null) {
            return null;
        }
        return Arrays.stream(enumClass.getEnumConstants())
                .filter(e -> e.getCode().equals(enumCode))
                .findFirst()
                .orElse(null);
    }
}
