import crypto from 'crypto';

/**
 * Order 45: Generate MD5 for text
 * Using utf-8 encode.
 *
 */
class EncryptMd5 {

  static md5(text) {
    return crypto.createHash('md5').update(text, 'utf8').digest('hex');
  }
}

export default EncryptMd5;
