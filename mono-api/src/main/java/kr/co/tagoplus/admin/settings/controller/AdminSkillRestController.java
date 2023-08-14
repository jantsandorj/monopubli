package kr.co.tagoplus.admin.settings.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.settings.entity.Skill;
import kr.co.tagoplus.settings.serializer.SkillSerializer;
import kr.co.tagoplus.settings.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class AdminSkillRestController {

	@Autowired
	private SkillService skillService;

	@GetMapping(value = "/api/skill/list", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getSkillList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {

		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		try	{
			ObjectMapper mapper = new ObjectMapper();
			mapper.registerModule(new SimpleModule().addSerializer(Skill.class, new SkillSerializer()));

			Page<Skill> skillList = skillService.getPagedByFilter(params, pageable);
			return new ResponseEntity<Object>(mapper.writeValueAsString(skillList), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}

		throw new CustomResponseException("error.get.skill.list");
	}

	@GetMapping(value = "/api/skill/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getSkillAll(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {

		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		try	{
			ObjectMapper mapper = new ObjectMapper();
			mapper.registerModule(new SimpleModule().addSerializer(Skill.class, new SkillSerializer()));

			List<Skill> skillList = skillService.getAll();
			return new ResponseEntity<Object>(mapper.writeValueAsString(skillList), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}

		throw new CustomResponseException("error.get.skill.list");
	}

	@GetMapping(value = "/api/skill/detail/{seq}")
	public ResponseEntity<Object> getSkillDetailBySeq(@PathVariable int seq, Authentication authentication) throws CustomResponseException {

		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		try	{

			Skill skill = skillService.getById(seq);

			return ResponseEntityUtil.success(skill);

		} catch (Exception e) {
			e.printStackTrace();
		}

		throw new CustomResponseException("error.get.skill.list");
	}

	@PostMapping(path = "/api/skill/create" )
	public ResponseEntity<Object> adminSkillCreate(Skill skill, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		int affectedRows = skillService.insert(skill);
		if (affectedRows > 0) {
			return ResponseEntityUtil.success(skill);
		}

		return ResponseEntityUtil.error("admin.failed.create.skill");
	}

	@PostMapping(path = "/api/skill/update" )
	public ResponseEntity<Object> adminSkillUpdate(Skill skill, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		int affectedRows = skillService.update(skill);
		if (affectedRows > 0) {
			return ResponseEntityUtil.success(skill);
		}

		return ResponseEntityUtil.error("admin.failed.update.skill");
	}

	@PostMapping(path = "/api/skill/delete" )
	public ResponseEntity<Object> adminSkillDelete(@RequestBody Skill skill, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		if(skill.getSeq() > 0){
			int affectedRows = skillService.deleteById(skill.getSeq());
			if (affectedRows > 0) {
				return ResponseEntityUtil.success(null);
			}
		}

		return ResponseEntityUtil.error("admin.failed.delete.skill");
	}

}