package cn.itcast.controller;

import cn.itcast.pojo.UserPojo;
import cn.itcast.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class IndexController {
	@Autowired
	private RatingService ratingService;
	@Autowired
	private MealService mealService;
	@Autowired
	private ReviewService reviewService;
	@Autowired
	private UserService userService;

	@RequestMapping("/index")
	public String showIndex() {
		return "/index.jsp";
	}
	@RequestMapping(value = "/pie", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getRating() {
		String data = ratingService.getRatingData();
		return data;
	}
	@RequestMapping(value = "/funnel",
			produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getMealID() {
		String data = mealService.getMealData();
		return data;
	}
	@RequestMapping(value = "/cloud",
			produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getReview() {
		String data = reviewService.getReviewData();
		return data;
	}
	@RequestMapping(value = "/test")
	@ResponseBody
	public String test(@RequestBody List<UserPojo> userList)

	{
		UserPojo temp=new UserPojo();

		for(UserPojo user:userList)
		{
			temp.setPassword(user.getPassword());
		}

		if(userService.get_id(temp))
		{
			return "success";
		}

		return null;
		//return showIndex();
	}
}
