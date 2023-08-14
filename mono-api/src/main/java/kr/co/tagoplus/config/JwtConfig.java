package kr.co.tagoplus.config;

import java.io.IOException;
import java.io.InputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.UnrecoverableKeyException;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {

	protected static Logger log = LoggerFactory.getLogger(JwtConfig.class);
	
	@Value("${app.security.jwt.keystore-location}")
	private String keyStorePath;
	
	@Value("${app.security.jwt.keystore-password}")
	private String keyStorePassword;
	
	@Value("${app.security.jwt.key-alias}")
	private String keyAlias;
	
	@Value("${app.security.jwt.private-key-passphrase}")
	private String privateKeyPassphrase;
	
	@Bean
	public KeyStore ketStore() {
		try {
			KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
			InputStream resourceAsStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(keyStorePath);
			keyStore.load(resourceAsStream, keyStorePassword.toCharArray());
			return keyStore;
		} catch (IOException | CertificateException | NoSuchAlgorithmException | KeyStoreException e) {
			e.printStackTrace();
			log.error("Unable to load keystore: {}", keyStorePath, e);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		throw new IllegalArgumentException("Unable to load keystore");
	}
	
	@Bean
	public RSAPrivateKey jwtSigninKey(KeyStore keyStore) {
		try {
			Key key = keyStore.getKey(keyAlias, privateKeyPassphrase.toCharArray());
			if(key instanceof RSAPrivateKey) {
				return (RSAPrivateKey) key;
			}
		} catch (UnrecoverableKeyException | NoSuchAlgorithmException | KeyStoreException e) {
			log.error("Unable to load private key from keystore: {}", keyStorePath, e);
		}
		
		throw new IllegalArgumentException("Unable to load private key");
	}
	
	@Bean
	public RSAPublicKey jwtValidationKey(KeyStore keyStore) {
		try {
			Certificate certification = keyStore.getCertificate(keyAlias);
			PublicKey publicKey = certification.getPublicKey();
			
			if(publicKey instanceof RSAPublicKey) {
				return (RSAPublicKey) publicKey;
			}
		} catch (KeyStoreException e) {
			log.error("Unable to load private key from keystore: {}", keyStorePath, e);
		}
		
		throw new IllegalArgumentException("Unable to load RSA public key");
	}
	
}
