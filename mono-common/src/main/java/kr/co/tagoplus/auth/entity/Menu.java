package kr.co.tagoplus.auth.entity;

import java.util.List;
import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Menu extends GeneralVO {
	private static final long serialVersionUID = -7123111327352614394L;

	private int seq;
	private int parentSeq;
	private String menuId;
	private String menuName;
	private String menuNameKr;
	private String menuUrl;
	private int orderNumber;
	private String positionType;
	private String menuType;
	
	private int upperMenuId;
	private int upperParentMenuId;
	
    private Menu parent;
    //private List<Menu> children = new ArrayList<Menu>();
	
    private String useYn;
    private String headerText;
    private String showYn;
    private String adminMenuYn;
    private String DEPTH;
    private String parentMenuId;
    private String setAt;
    private String authYn;
    private List<Menu> listSub;
    private long fileGroupSeq;
    private FileDetail attachment = new FileDetail();
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public int getParentSeq() {
		return parentSeq;
	}
	public void setParentSeq(int parentSeq) {
		this.parentSeq = parentSeq;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public String getMenuUrl() {
		return menuUrl;
	}
	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}
	public int getOrderNumber() {
		return orderNumber;
	}
	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}
	public String getPositionType() {
		return positionType;
	}
	public void setPositionType(String positionType) {
		this.positionType = positionType;
	}
	public int getUpperParentMenuId() {
		return upperParentMenuId;
	}
	public void setUpperParentMenuId(int upperParentMenuId) {
		this.upperParentMenuId = upperParentMenuId;
	}
	public int getUpperMenuId() {
		return upperMenuId;
	}
	public void setUpperMenuId(int upperMenuId) {
		this.upperMenuId = upperMenuId;
	}
	public Menu getParent() {
		return parent;
	}
	public void setParent(Menu parent) {
		this.parent = parent;
	}
	//public List<Menu> getChildren() {
	//	return children;
	//}
	//public void setChildren(List<Menu> children) {
	//	this.children = children;
	//}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getHeaderText() {
		return headerText;
	}
	public void setHeaderText(String headerText) {
		this.headerText = headerText;
	}
	public String getShowYn() {
		return showYn;
	}
	public void setShowYn(String showYn) {
		this.showYn = showYn;
	}
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	
	public String getAdminMenuYn() {
		return adminMenuYn;
	}
	public void setAdminMenuYn(String adminMenuYn) {
		this.adminMenuYn = adminMenuYn;
	}
	
	public String getDEPTH() {
		return DEPTH;
	}
	public void setDEPTH(String dEPTH) {
		DEPTH = dEPTH;
	}
	
	public String getParentMenuId() {
		return parentMenuId;
	}
	public void setParentMenuId(String parentMenuId) {
		this.parentMenuId = parentMenuId;
	}
	
	public String getMenuType() {
		return menuType;
	}
	
	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}
	
	public String getSetAt() {
		return setAt;
	}
	public void setSetAt(String setAt) {
		this.setAt = setAt;
	}
	public List<Menu> getListSub() {
		return listSub;
	}
	public void setListSub(List<Menu> listSub) {
		this.listSub = listSub;
	}
	public long getFileGroupSeq() {
		return fileGroupSeq;
	}
	public void setFileGroupSeq(long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}
	
	public FileDetail getAttachment() {
		return attachment;
	}
	
	public void setAttachment(FileDetail attachment) {
		this.attachment = attachment;
	}
	
	public String getMenuNameKr() {
		return menuNameKr;
	}
	public void setMenuNameKr(String menuNameKr) {
		this.menuNameKr = menuNameKr;
	}

	public String getAuthYn() {
		return authYn;
	}
	public void setAuthYn(String authYn) {
		this.authYn = authYn;
	}

	@Override
	public String toString() {
		return "Menu [seq=" + seq + ", parentSeq=" + parentSeq + ", menuName=" + menuName + ", menuUrl=" + menuUrl
				+ ", orderNumber=" + orderNumber + ", positionType=" + positionType + ", upperMenuId=" + upperMenuId
				+ ", upperParentMenuId=" + upperParentMenuId + ", parent=" + parent 
				+ ", useYn=" + useYn + ", headerText=" + headerText + ", showYn=" + showYn + "]";
	}
}
