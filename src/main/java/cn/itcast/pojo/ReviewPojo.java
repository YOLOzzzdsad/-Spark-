package cn.itcast.pojo;

public class ReviewPojo {
	private int num;
	private String review;
	
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	@Override
	public String toString() {
		return "{\"name\":\"" + review
				+ "\", \"value\":" 
				+ String.valueOf(num) + "}";
	}
}
