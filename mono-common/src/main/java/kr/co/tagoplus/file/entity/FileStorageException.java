package kr.co.tagoplus.file.entity;

/**
 * @author Tim
 *
 */
public class FileStorageException extends RuntimeException{
	private static final long serialVersionUID = 9174451991276834415L;

	public FileStorageException(String message) {
        super(message);
    }

    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
    
}
