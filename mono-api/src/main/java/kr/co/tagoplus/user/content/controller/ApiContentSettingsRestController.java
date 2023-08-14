package kr.co.tagoplus.user.content.controller;

import kr.co.tagoplus.common.model.StringIdList;
import kr.co.tagoplus.content.service.ContentSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class ApiContentSettingsRestController {
	//private static Logger logger = LoggerFactory.getLogger(ApiContentSettingsRestController.class);
	
	@Autowired
	private ContentSettingsService contentSettingsService;

	@GetMapping(value = "/web/content/settings")
	public ResponseEntity<Object> getContentSettingsList(StringIdList ids) {
		
		Map<String, Object> result = contentSettingsService.getMappedByIdList(ids.getIds());
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
}