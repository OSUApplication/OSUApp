package com.healthcontroller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HealthController {

	@RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    
	@RequestMapping(value="/health")
	public String getHealth() throws JSONException {
		JSONObject item = new JSONObject();
		item.put("status", "up");
		return item.toString();
	}

	
}
