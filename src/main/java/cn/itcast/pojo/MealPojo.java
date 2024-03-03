package cn.itcast.pojo;

public class MealPojo {
	private String MealID;
	private int num;
	public String getMealID() {
		return MealID;
	}
	public void setMealID(String MealID) {
		this.MealID = MealID;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}	
	@Override
	public String toString() {
		return "{\"name\":\"" + MealID
				+ "\", \"value\":" 
				+ String.valueOf(num) + "}";
	}
}
