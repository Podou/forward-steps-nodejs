
import CryptoAES from '../../../src/taskInventory/order_45/CryptoAES';

const text = '123456';
const password = 'abcdef';

const cipherAes192 = CryptoAES.cipherAes192(text, password);
console.log(cipherAes192);
const decipherAes192 = CryptoAES.decipherAes192(cipherAes192, password);
console.log(decipherAes192);
