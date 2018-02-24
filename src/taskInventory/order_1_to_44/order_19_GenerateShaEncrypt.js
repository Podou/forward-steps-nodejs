import crypto from 'crypto';

/**
 * Order 19: Generate SHA encryption algorithm
  * SHA-1
  * SHA-224
  * SHA-256
  * SHA-384
  * SHA-512
 * Using utf-8 encode.
 */
class GenerateSHA {

  static sha1(text) {
    return crypto.createHash('sha1').update(text, 'utf8').digest('hex');
  }

  static sha224(text) {
    return crypto.createHash('sha224').update(text, 'utf8').digest('hex');
  }

  static sha256(text) {
    return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
  }

  static sha384(text) {
    return crypto.createHash('sha384').update(text, 'utf8').digest('hex');
  }

  static sha512(text) {
    return crypto.createHash('sha512').update(text, 'utf8').digest('hex');
  }

}

export default GenerateSHA;
