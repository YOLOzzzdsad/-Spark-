package cn.itcast.mapper;

import java.util.List;
import cn.itcast.pojo.ReviewPojo;

public interface ReviewMapper {
	public List<ReviewPojo> selectReview();
}
