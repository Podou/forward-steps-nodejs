
import crypto from 'crypto';

/**
 * crypto.getCiphers()
 *
 * Refer to:
 * 1. https://cnodejs.org/topic/504061d7fef591855112bab5
 * 2. https://stackoverflow.com/questions/29550509/nodejs-aes-256-hex-decrypt-error
 *
 * crypto.getCiphers()
  'aes-128-cbc',
  'aes-128-cbc-hmac-sha1',
  'aes-128-cbc-hmac-sha256',
  'aes-128-ccm',
  'aes-128-cfb',
  'aes-128-cfb1',
  'aes-128-cfb8',
  'aes-128-ctr',
  'aes-128-ecb',
  'aes-128-gcm',
  'aes-128-ofb',
  'aes-128-xts',
  'aes-192-cbc',
  'aes-192-ccm',
  'aes-192-cfb',
  'aes-192-cfb1',
  'aes-192-cfb8',
  'aes-192-ctr',
  'aes-192-ecb',
  'aes-192-gcm',
  'aes-192-ofb',
  'aes-256-cbc',
  'aes-256-cbc-hmac-sha1',
  'aes-256-cbc-hmac-sha256',
  'aes-256-ccm',
  'aes-256-cfb',
  'aes-256-cfb1',
  'aes-256-cfb8',
  'aes-256-ctr',
  'aes-256-ecb',
  'aes-256-gcm',
  'aes-256-ofb',
  'aes-256-xts',
  'aes128',
  'aes192',
  'aes256',
 */
class Cipher {

  static chipher(algorithm, text, password) {
    const cipher = crypto.createCipher(algorithm, password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  static dechipher(algorithm, encrypted, password) {
    const decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  static cipherAes128(text, password) {
    return Cipher.chipher('aes128', text, password);
  }

  static decipherAes128(encrypted, password) {
    return Cipher.dechipher('aes128', encrypted, password);
  }

  static cipherAes192(text, password) {
    return Cipher.chipher('aes192', text, password);
  }

  static decipherAes192(encrypted, password) {
    return Cipher.dechipher('aes192', encrypted, password);
  }

  static cipherAes256(text, password) {
    return Cipher.chipher('aes256', text, password);
  }

  static decipherAes256(encrypted, password) {
    return Cipher.dechipher('aes256', encrypted, password);
  }

}

export default Cipher;
