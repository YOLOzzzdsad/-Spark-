package cn.itcast.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import cn.itcast.mapper.ReviewMapper;
import cn.itcast.pojo.ReviewPojo;
import cn.itcast.service.ReviewService;
@Service
public class ReviewServiceImpl implements ReviewService {
	@Autowired
	private ReviewMapper mapper;
	@Transactional
	public String getReviewData(){
		
		List<ReviewPojo> lists = mapper.selectReview();
		List<String> resultData = new ArrayList<String>();
		for (ReviewPojo reviewPojo : lists) {
			resultData.add(reviewPojo.toString());
		}	
		ObjectMapper om = new ObjectMapper();
		String beanJson = null;
		try {
			beanJson = om.writeValueAsString(resultData);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return beanJson;
	}
}
