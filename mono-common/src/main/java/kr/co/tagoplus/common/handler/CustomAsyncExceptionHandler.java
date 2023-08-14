package kr.co.tagoplus.common.handler;

import java.lang.reflect.Method;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;

public class CustomAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {
	protected static Logger logger = LoggerFactory.getLogger(CustomAsyncExceptionHandler.class);	

	@Override
	public void handleUncaughtException(Throwable ex, Method method, Object... params) {
		logger.error("Exception message - " + ex.getMessage());
		logger.error("Method name - " + method.getName());
        for (final Object param : params) {
        	logger.error("Param - " + param);
        }
	}

}