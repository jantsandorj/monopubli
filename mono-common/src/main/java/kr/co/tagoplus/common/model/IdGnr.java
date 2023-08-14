package kr.co.tagoplus.common.model;

/**
 * @tablename: t_ids
 * */
public class IdGnr {

	private String tableName;
	private long idIndex;
	
	public String getTableName() {
		return tableName;
	}
	public long getIdIndex() {
		return idIndex;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public void setIdIndex(long idIndex) {
		this.idIndex = idIndex;
	}
}