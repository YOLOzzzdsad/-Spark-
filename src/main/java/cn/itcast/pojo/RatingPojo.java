package cn.itcast.pojo;

public class RatingPojo {
	private String rating;
	private int num;
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	@Override
	public String toString() {
		return "{\"name\":\"" + rating
				+ "\", \"value\":" 
				+ String.valueOf(num) + "}";
	}
}
