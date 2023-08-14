package kr.co.tagoplus.auth.service.impl;

import java.util.*;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.UserMapper;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.form.LoginForm;
import kr.co.tagoplus.form.PasswordResetForm;
import kr.co.tagoplus.form.UserPasswordChangeForm;

@Service
@Transactional("transactionManager")
public class UserServiceImpl extends AbstractGenericServiceImpl<User, Long> implements UserService {
	protected static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	private static final int TEMP_PWD_LENGTH = 8;
	
    private BCryptPasswordEncoder encoder;

	@Autowired
	private UserMapper mapper;
	
	@Autowired
    private JwtHelper jwtHelper;

	@Override
	protected GenericMapper<User, Long> getMapper() {
		return mapper;
	}
	
	public UserServiceImpl() {
		this.encoder = new BCryptPasswordEncoder();
	}

	public String authAndToken(LoginForm form) {
		String token = "";

		User user = getByUsername(form.getUsername());

		if (user != null && encoder.matches(form.getPassword(), user.getPassword())) {
			Map<String, String> claims = new HashMap<>();
			claims.put("username", user.getUsername());
			claims.put("fullname", user.getFullname());
			claims.put("authorities", "");
			claims.put("email", user.getEmail());
			claims.put("phone", user.getPhone());
			claims.put("lastLoginDate", user.getLastLoginDate());

			token = jwtHelper.createJwtForClaims(form.getUsername(), claims);

			logger.debug("Token requested for user: '{}'", user.getUsername());
		}

		return token;
	}
	
	@Override
	public User authenticate(String username) {
		return mapper.authenticate(username);
	}

	@Override
	public User register(User user) {
		String encryptedPass = "";

		try {
			encryptedPass = user.getPassword();
			encryptedPass = encoder.encode(encryptedPass);
		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			user.setPassword(encryptedPass);
			insert(user);
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public boolean checkPasswordMatch(String checkPassword, String oldPassword) {
		if(encoder.matches(checkPassword, oldPassword)){
			return true;
		}
		return false;
	}

	@Override
	public void changePassword(UserPasswordChangeForm changePasswordForm) {
		try {
			String encryptedPass = "";
			encryptedPass = encoder.encode(changePasswordForm.getPassword());
			mapper.resetPassword(changePasswordForm.getUsername(), encryptedPass);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
    @Override
    public String generateTempPwd(String email) {
        User user = getByEmail(email);

        String tempPass = "";
        if (user != null) {
            tempPass = RandomStringUtils.randomAlphanumeric(TEMP_PWD_LENGTH);
            String encryptedPass = null;
            try {
                if (!StringUtils.isBlank(tempPass)) {
                    encryptedPass = encoder.encode(tempPass);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            user.setTempPwd(encryptedPass);
            user.setTempPwdCreDt(DateUtil.getTimestampAsCompact());
            user.setTempPwdEndDt(DateUtil.getDelayedTimestampAsCompact(15));
            update(user);
        }

        return tempPass;
    }

	@Override
	public User getByFullnameAndEmail(String fullname, String email) {
		return mapper.getByFullnameAndEmail(fullname, email);
	}

	@Override
	public int getAllUserCount() {
		return mapper.getAllUserCount();
	}

	@Override
	public int getAllRegisteredUserLastMonthCount() {
		String validDate = "";
		Date currentDate = new Date();

		Calendar cal = Calendar.getInstance();
		cal.setTime(currentDate);
		cal.add(Calendar.MONTH, -1);
		Date newDate = cal.getTime();
		validDate = DateUtil.convertFromDate(newDate, "yyyy-MM-dd HH:mm:ss");

		return mapper.getAllRegisteredUserLastMonthCount(validDate);
	}

	@Override
	public boolean resetPassword(PasswordResetForm form) {
		User user = getByFullnameAndEmail(form.getFullname(), form.getEmail());
		
		if(user == null) {
			return false;
		}
		
		String encryptedPass = "";
		try {
			encryptedPass = form.getNewPassword();
			encryptedPass = encoder.encode(encryptedPass);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return mapper.resetPassword(user.getUsername(), encryptedPass);
	}


	@Override
	public boolean canUseUsername(String username) {
		return mapper.canUseUsername(username);
	}

	@Override
	public boolean canUseEmail(long id, String email) {
		return mapper.canUseEmail(id, email);
	}

	@Override
	public boolean existByEmail(String email) {
		return mapper.existByEmail(email);
	}

	@Override
	public boolean existByUsername(String username) {
		return mapper.existByUsername(username);
	}
	
	@Override
	public boolean existByPhone(String phone) {
		return mapper.existByPhone(phone);
	}

	@Override
	public void updateLastLoginDate(String username, String loginDate) {
		mapper.updateLastLoginDate(username, loginDate);
	}

	@Override
	public User getByUsername(String username) {
		return mapper.getByUsername(username);
	}
	
	@Override
    public User getByEmail(String email) {
        return mapper.getByEmail(email);
    }

	public List<User> getList(Map<String, Object> params){return mapper.getList(params);}
}