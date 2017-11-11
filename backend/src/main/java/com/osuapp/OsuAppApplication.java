package com.osuapp;

import com.osuapp.constants.ApplicationConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class OsuAppApplication {
    private static final Logger logger = LoggerFactory.getLogger(OsuAppApplication.class);

    public static void main(String[] args) {
		SpringApplication.run(OsuAppApplication.class, args);
        logger.debug("--Application Started--");
	}

    @Bean
    public WebMvcConfigurer corsConfigure() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");

                registry.addMapping("/osu/auth/signup").allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
            }
        };
    }

}
