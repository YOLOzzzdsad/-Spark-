package cn.itcast.service.impl;

import cn.itcast.mapper.UserMapper;
import cn.itcast.pojo.UserPojo;
import cn.itcast.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userservice")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    //@Override
    public boolean get_id(UserPojo user) {
        if (userMapper.get_user(user)!=null) //通过mapper方法查找账号密码
        {
            return true;
        }
        else
        {
            return false;
        }

    }
}

