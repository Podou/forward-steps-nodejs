
import crypto from 'crypto';

/**
 * crypto.getCiphers()
 *
 * 'aes128',
  'aes192',
  'aes256',
 */
class CryptoAES {

  static cipherAes192(text, password) {
    const cipher = crypto.createCipher('aes192', password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  static decipherAes192(encrypted, password) {
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted = decipher.update(encrypted, 'utf8', 'hex');
    decrypted += decipher.final('hex');
    return decrypted;
  }

}

export default CryptoAES;
