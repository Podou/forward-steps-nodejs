import sha3 from 'sha3';

/**
 * Order 45:
 * Using utf-8 encode.
 *
 * In crypto, it not support sha3, should install sha3 module.
 * Please use `npm install sha3`
 */
class EncryptSha3 {

  static sha3_224(text) {
    text = text ? text : '';
    const sha3_224 = new SHA3.SHA3Hash('224');
    return sha3_224.update(text, 'utf8').digest('hex');
  }

  static sha3_256(text) {
    text = text ? text : '';
    const sha3_256 = new SHA3.SHA3Hash('256');
    return sha3_256.update(text, 'utf8').digest('hex');
  }

  static sha3_384(text) {
    text = text ? text : '';
    const sha3_384 = new SHA3.SHA3Hash('384');
    return sha3_384.update(text, 'utf8').digest('hex');
  }

  static sha3_512(text) {
    text = text ? text : '';
    const sha3_512 = new SHA3.SHA3Hash('512');
    return sha3_512.update(text, 'utf8').digest('hex');
  }
}

export default EncryptSha3;
