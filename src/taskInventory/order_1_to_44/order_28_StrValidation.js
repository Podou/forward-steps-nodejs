

class StrValidation{
  static ipv4(str) {
    const reg = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;
    return reg.test(str);
  }

  static ipv4WithMask(str) {
    const reg = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}//(\d|[1-2]\d|3[0-2])$/;
    return reg.test(str);
  }

  static ipv6(str) {

  }

  static ipv6WithMask(str) {

  }
}

export default StrValidation
