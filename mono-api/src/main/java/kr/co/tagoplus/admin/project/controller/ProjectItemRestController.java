package kr.co.tagoplus.admin.project.controller;

import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectItem;
import kr.co.tagoplus.project.service.ProjectService;
import kr.co.tagoplus.form.ProjectListForm;
import kr.co.tagoplus.project.service.ProjectItemService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectItemRestController {

    @Autowired
    private ProjectItemService projectItemService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private FileService fileService;

    @PostMapping(value = "/api/project/item/create")
    public ResponseEntity<Object> createProjectItem(ProjectListForm projectListForm, Project project, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        projectService.updatePrice(project);

        List<ProjectItem> list = projectListForm.getProjectItems();

        if(list.size() > 0){
            for(int i=0; i < list.size(); i++){
                long fileGroupSeq;
                if(list.get(i).getAttachFile() != null) {
                    fileGroupSeq = fileService.generateFileGroup();
                    fileService.fileStore(list.get(i).getAttachFile().getFile(), "Project design", fileGroupSeq);
                    list.get(i).setFileGroupSeq(fileGroupSeq);
                }
                list.get(i).setProjectSeq(project.getSeq());
                projectItemService.register(list.get(i));

                String skillArr[] = list.get(i).getSkillSeq().split(",");
                if(skillArr.length > 0){
                    for(String skill : skillArr){
                        ProjectItem projectItem = new ProjectItem();
                        projectItem.setProjectSeq(project.getSeq());
                        projectItem.setSeq(list.get(i).getSeq());
                        projectItem.setSkillSeq(skill);

                        projectItemService.registerSkill(projectItem);
                    }
                }
            }
        }
        return ResponseEntityUtil.success(null);
    }

    @PostMapping(value = "/api/project/item/update")
    public ResponseEntity<Object> updateProjectItem(ProjectListForm projectListForm, Project project, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        projectService.updatePrice(project);

        List<ProjectItem> list = projectListForm.getProjectItems();

        if(list.size() > 0){
            for(int i=0; i < list.size(); i++){

                if(list.get(i).getAttachFile() != null) {
                    if ( list.get(i).getFileGroupSeq() == null ||  list.get(i).getFileGroupSeq() == 0) {
                        list.get(i).setFileGroupSeq(fileService.generateFileGroup());
                    }
                    else {
                        fileService.deleteByFileGroup( list.get(i).getFileGroupSeq());
                    }
                    fileService.fileStore(list.get(i).getAttachFile().getFile(), "Project design",  list.get(i).getFileGroupSeq());
                }
                list.get(i).setProjectSeq(project.getSeq());
                projectItemService.update(list.get(i));

                projectItemService.deleteSkill(list.get(i).getSeq());

                String skillArr[] = list.get(i).getSkillSeq().split(",");
                if(skillArr.length > 0){
                    for(String skill : skillArr){
                        ProjectItem projectItem = new ProjectItem();
                        projectItem.setSeq(list.get(i).getSeq());
                        projectItem.setSkillSeq(skill);
                        projectItem.setProjectSeq(project.getSeq());

                        projectItemService.registerSkill(projectItem);
                    }
                }
            }
        }
        return ResponseEntityUtil.success(null);
    }

    @PostMapping(value = "/api/project/item/worker/update")
    public ResponseEntity<Object> updateProjectItemWorker(ProjectListForm projectListForm, Project project, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        List<ProjectItem> list = projectListForm.getProjectItems();
        int counter = 0;

        if(list.size() > 0){
            for(int i=0; i < list.size(); i++){
               projectItemService.deleteWorker(list.get(i).getSeq());
            }

            for(int i=0; i < list.size(); i++){
                if("Y".equals(list.get(i).getIsCompletedManager())){
                    counter++;
                }
                projectItemService.updateIsCompletedManager(list.get(i));

                if(list.get(i).getWorkerSeq() != null){
                    String workerSeqArr[] = list.get(i).getWorkerSeq().split(",");
                    String isCompletedWorkerArr[] = null;
                    if(list.get(i).getIsCompletedWorker() != null){
                        isCompletedWorkerArr = list.get(i).getIsCompletedWorker().split(",");
                    }
                    for(int j=0; j< workerSeqArr.length; j++){
                        ProjectItem item = new ProjectItem();
                        item.setSeq(list.get(i).getSeq());
                        item.setAdminSeq(Long.valueOf(workerSeqArr[j]));
                        item.setIsCompletedWorker(isCompletedWorkerArr[j]);
                        item.setProjectSeq(project.getSeq());
                        projectItemService.registerWorker(item);
                    }
                }
            }

            int process = counter * 100 / list.size();
            project.setProcess(process);
            projectService.updateProcess(project);
        }
        return ResponseEntityUtil.success(null);
    }

    @PostMapping(value = "/api/project/item/delete/{seq}")
    public ResponseEntity<Object> deleteProjectItem(@PathVariable Long seq) {

        int affactedRows = projectItemService.deleteById(seq);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(null);
        }

        return ResponseEntityUtil.error("error.delete");
    }

}
