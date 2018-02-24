import crypto from 'crypto';

/**
 * In Crypto support:
 *
 * crypto.getHashes()
 * [ 'DSA',
  'DSA-SHA',
  'DSA-SHA1',
  'DSA-SHA1-old',
  'RSA-MD4',
  'RSA-MD5',
  'RSA-MDC2',
  'RSA-RIPEMD160',
  'RSA-SHA',
  'RSA-SHA1',
  'RSA-SHA1-2',
  'RSA-SHA224',
  'RSA-SHA256',
  'RSA-SHA384',
  'RSA-SHA512',
  'dsaEncryption',
  'dsaWithSHA',
  'dsaWithSHA1',
  'dss1',
  'ecdsa-with-SHA1',
  'md4',
  'md4WithRSAEncryption',
  'md5',
  'md5WithRSAEncryption',
  'mdc2',
  'mdc2WithRSA',
  'ripemd',
  'ripemd160',
  'ripemd160WithRSA',
  'rmd160',
  'sha',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512WithRSAEncryption',
  'shaWithRSAEncryption',
  'ssl2-md5',
  'ssl3-md5',
  'ssl3-sha1',
  'whirlpool' ]
 */

/**
 * Order 45:
 * Using utf-8 encode.
 *
 * Refer to: http://docs.huihoo.com/go/golang.org/pkg/crypto/index.html
 * All irreversible encryption
 */
class EncryptSha {

  static sha1(text) {
    text = text ? text : '';
    return crypto.createHash('sha1').update(text, 'utf8').digest('hex');
  }

  static sha224(text) {
    text = text ? text : '';
    return crypto.createHash('sha224').update(text, 'utf8').digest('hex');
  }

  static sha256(text) {
    text = text ? text : '';
    return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
  }

  static sha384(text) {
    text = text ? text : '';
    return crypto.createHash('sha384').update(text, 'utf8').digest('hex');
  }

  static sha512(text) {
    text = text ? text : '';
    return crypto.createHash('sha512').update(text, 'utf8').digest('hex');
  }

  // SHA512_224 SHA512_256
}

export default EncryptSha;
