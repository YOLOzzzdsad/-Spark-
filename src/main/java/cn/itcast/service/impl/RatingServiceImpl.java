package cn.itcast.service.impl;

import java.util.ArrayList;
import java.util.List;

import cn.itcast.pojo.RatingPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import cn.itcast.mapper.RatingMapper;
import cn.itcast.service.RatingService;

@Service
public class RatingServiceImpl implements RatingService {
	@Autowired
	private RatingMapper mapper;
	@Transactional
	public String getRatingData() {
		List<RatingPojo> lists = mapper.selectRating();
		List<String> resultData = new ArrayList<String>();
		for (RatingPojo RatingPojo : lists) {
			resultData.add(RatingPojo.toString());
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
