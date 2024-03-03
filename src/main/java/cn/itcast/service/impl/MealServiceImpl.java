package cn.itcast.service.impl;

import java.util.ArrayList;
import java.util.List;

import cn.itcast.mapper.MealMapper;
import cn.itcast.pojo.MealPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import cn.itcast.service.MealService;
@Service
public class MealServiceImpl implements MealService {
	@Autowired
	private MealMapper mapper;
	@Transactional
	public String getMealData() {
		List<MealPojo> lists = mapper.selectMeal();
		List<String> resultData = new ArrayList<String>();
		for (MealPojo mealPojo : lists) {
			resultData.add(mealPojo.toString());
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
