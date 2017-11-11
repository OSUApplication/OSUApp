package com.osuapp.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * Constructor disables the default security settings
     */
    public WebSecurityConfig() {
        super(true);
    }


    private final Logger log = LoggerFactory.getLogger(this.getClass());


    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/auth/signup").antMatchers(HttpMethod.OPTIONS).antMatchers(HttpMethod.GET);
        web.ignoring().antMatchers("/login");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.cors().disable().antMatcher("/osu/**").
                authorizeRequests().antMatchers("/osu/api/addUser").permitAll().anyRequest().authenticated();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}