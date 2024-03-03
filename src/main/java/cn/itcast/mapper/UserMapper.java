package cn.itcast.mapper;

import cn.itcast.pojo.UserPojo;

public interface UserMapper {
    //@Select("select * from user where username=#{username} and password=#{password}")
    //验证密码账户
    public UserPojo get_user(UserPojo user);

}
