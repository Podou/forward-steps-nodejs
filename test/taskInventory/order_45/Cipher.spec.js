
import Cipher from '../../../src/taskInventory/order_45/Cipher';

const text = '123456';
const password = '7y05R9qwKaIKgIHh4vAw19X1zuknR21Y';

console.log('\n==== AES128 ====');
const cipherAes128 = Cipher.cipherAes128(text, password);
// 4a2cff53ebaac3f90e4de42003f3aa22
console.log(cipherAes128);
const decipherAes128 = Cipher.decipherAes128(cipherAes128, password);
// 123456
console.log(decipherAes128);

console.log('\n==== AES192 ====');
const cipherAes192 = Cipher.cipherAes192(text, password);
// 68b394548f360edc2afcfb05f664b6aa
console.log(cipherAes192);
const decipherAes192 = Cipher.decipherAes192(cipherAes192, password);
// 123456
console.log(decipherAes192);

console.log('\n==== AES256 ====');
const cipherAes256 = Cipher.cipherAes256(text, password);
// 10d6120b092907156aa546508ff6cf7f
console.log(cipherAes256);
const decipherAes256 = Cipher.decipherAes256(cipherAes256, password);
// 123456
console.log(decipherAes256);

console.log('\n==== Cipher ====');
const cipher = Cipher.chipher('aes-256-cbc', text, password);
// 10d6120b092907156aa546508ff6cf7f
console.log(cipher);
const decipher = Cipher.dechipher('aes-256-cbc', cipher, password);
// 123456
console.log(decipher);


console.log('\n==== DES Cipher ====');
const desCipher = Cipher.chipher('des', text, password);
// 32e5f792b18ada03
console.log(desCipher);
const desDecipher = Cipher.dechipher('des', desCipher, password);
// 123456
console.log(desDecipher);
