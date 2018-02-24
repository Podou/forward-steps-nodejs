
import EncryptSha from '../../../src/taskInventory/order_45/EncryptSha';

const text = '123456';

// 7c4a8d09ca3762af61e59520943dc26494f8941b
console.log(EncryptSha.sha1(text));

// f8cdb04495ded47615258f9dc6a3f4707fd2405434fefc3cbf4ef4e6
console.log(EncryptSha.sha224(text));

// 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
console.log(EncryptSha.sha256(text));

// 0a989ebc4a77b56a6e2bb7b19d995d185ce44090c13e2984b7ecc6d446d4b61ea9991b76a4c2f04b1b4d244841449454
console.log(EncryptSha.sha384(text));

// ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413
console.log(EncryptSha.sha512(text));
