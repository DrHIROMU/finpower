package khlin.finpower.config;

import com.fasterxml.jackson.databind.module.SimpleModule;
import khlin.finpower.util.api.StringTrimToNullDeserializer;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JacksonConfig {
    @Bean
    public Jackson2ObjectMapperBuilderCustomizer customizer() {
        return builder -> {
            SimpleModule module = new SimpleModule();
            module.addDeserializer(String.class, new StringTrimToNullDeserializer());
            builder.modulesToInstall(module);
        };
    }
}