package kr.co.tagoplus.user.project.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.file.service.FileService;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ApiProjectRestController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private FileService fileService;

    @GetMapping(value = "/web/project/list")
    public ResponseEntity<Object> getProjectList(@RequestParam Map<String, Object> params, Pageable pageable) throws CustomResponseException {
        Page<Project> list = projectService.getListByUser(params, pageable);
        return new ResponseEntity<Object>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/web/project/{seq:\\d+}")
    public ResponseEntity<Object> getProject(@PathVariable Long seq) throws CustomResponseException {
        Project project = projectService.getById(seq);

        if (project != null) {
            if(project.getSourceFileGroupSeq() != null){
                project.setSourceFile(fileService.getByGroupId(project.getSourceFileGroupSeq()));
            }
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.empty();
    }
}
