package kr.co.tagoplus.auth.service.impl;


import java.util.*;

import kr.co.tagoplus.common.util.DateUtil;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminMapper;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.form.LoginForm;

@Service
@Transactional("transactionManager")
public class AdminServiceImpl extends AbstractGenericServiceImpl<Admin, Long> implements AdminService {
    protected static Logger logger = LoggerFactory.getLogger(AdminServiceImpl.class);

    private static final int TEMP_PWD_LENGTH = 8;

    private BCryptPasswordEncoder encoder;

    @Autowired
    private AdminMapper mapper;

    @Autowired
    private JwtHelper jwtHelper;

    @Override
    protected GenericMapper<Admin, Long> getMapper() {
        return mapper;
    }

    public AdminServiceImpl() {
        this.encoder = new BCryptPasswordEncoder();
    }

    @Override
    public Admin getByUsername(String username) {
        return mapper.getByUsername(username);
    }

    @Override
    public int register(Admin admin) {
        String rawPassword = encoder.encode(admin.getPassword());
        admin.setPassword(rawPassword);
        return mapper.insert(admin);
    }
    @Override
    public int registerSkill(Admin admin) {
        return mapper.insertSkill(admin);
    }

    @Override
    public Map<String, String> authenticate(LoginForm form) {
        Admin admin = getByUsername(form.getUsername());
        Map<String, String> result = new HashMap<>();
        
        if(admin == null) {
        	return result;
        }
        
        result.put("useYn", admin.getUseYn() == null ? "Y" : admin.getUseYn());
        if("N".equals(admin.getUseYn())) {
        	return result;
        }
        
        if (encoder.matches(form.getPassword(), admin.getPassword()) ||
				(encoder.matches(form.getPassword(), admin.getTempPwd()) && Long.parseLong(admin.getTempPwdEndDt()) > Long.parseLong(DateUtil.getTimestampAsCompact()))
		) {
            logger.debug("Token requested for user: '{}'", admin.getUsername());
            Map<String, String> claims = new HashMap<>();
            claims.put("username", admin.getUsername());
            claims.put("fullname", admin.getFullname());
            claims.put("authorities", "");
            claims.put("email", admin.getEmail());
            claims.put("phone", admin.getPhone());
            claims.put("lastLoginDate", admin.getLastLoginDate());

            String jwt = jwtHelper.createJwtForClaims(form.getUsername(), claims);
            logger.debug("Token granted: '{}'", jwt);
            result.put("jwt", jwt);
            result.put("authorCd", admin.getAuthorCd());
            result.put("seq", admin.getSeq().toString());

            if (encoder.matches(form.getPassword(), admin.getTempPwd())) {
                result.put("loginType", "tempPass");
                admin.setTempPwdEndDt(DateUtil.getTimestampAsCompact());
            }
            admin.setLastLoginDate(DateUtil.getCurrentTimestamp());
            update(admin);
        }
        return result;
    }

    @Override
    public String generateTempPwd(String email) {
        Admin admin = getByEmail(email);

        String tempPass = "";
        if (admin != null) {
            tempPass = RandomStringUtils.randomAlphanumeric(TEMP_PWD_LENGTH);
            String encryptedPass = null;
            try {
                if (!StringUtils.isBlank(tempPass)) {
                    encryptedPass = encoder.encode(tempPass);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

            admin.setTempPwd(encryptedPass);
            admin.setTempPwdCreDt(DateUtil.getTimestampAsCompact());
            admin.setTempPwdEndDt(DateUtil.getDelayedTimestampAsCompact(15));

            update(admin);
        }

        return tempPass;
    }

    @Override
    public Admin getByEmail(String email) {
        return mapper.getByEmail(email);
    }


    @Override
    public int getAllAdminCounts() {
        return mapper.getAllAdminCounts();
    }

    @Override
    public int getOnlineAdminCounts(int validMin) {
        String validDate = "";
        Date currentDate = new Date();

        Calendar cal = Calendar.getInstance();
        cal.setTime(currentDate);
        cal.add(Calendar.MINUTE, -validMin);
        Date newDate = cal.getTime();
        validDate = DateUtil.convertFromDate(newDate, "yyyy-MM-dd HH:mm:ss");

        return mapper.getOnlineAdminCounts(validDate);
    }

    @Override
    public void changePassword(Admin admin) {
        String rawPassword = encoder.encode(admin.getPassword());
        admin.setPassword(rawPassword);
        admin.setModifiedDate(DateUtil.getTimestampAsCompact());
        admin.setModifiedBy(admin.getSeq());
        mapper.update(admin);
    }
    
    @Override
    public boolean existByUsername(String username) {
        return mapper.existByUsername(username);
    }
    
    @Override
    public boolean existByEmail(String email) {
        return mapper.existByEmail(email);
    }
    
    @Override
    public boolean existByPhone(String phone) {
        return mapper.existByPhone(phone);
    }

    @Override
    public int deleteSkill(Admin admin) {return mapper.deleteSkill(admin);}
    public List<Admin> getManagerListByPosition(Map<String, Object> params){return mapper.getManagerListByPosition(params);}
    public List<Admin> getWorkerListByPosition(Map<String, Object> params){
        return mapper.getWorkerListByPosition(params);
    }

}