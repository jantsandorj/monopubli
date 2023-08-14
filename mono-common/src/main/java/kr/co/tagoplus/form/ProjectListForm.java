package kr.co.tagoplus.form;


import kr.co.tagoplus.project.entity.ProjectItem;

import java.util.List;

public class ProjectListForm {

    private List<ProjectItem> projectItems;

    public List<ProjectItem> getProjectItems() {
        return projectItems;
    }

    public void setProjectItems(List<ProjectItem> projectItems) {
        this.projectItems = projectItems;
    }
}
