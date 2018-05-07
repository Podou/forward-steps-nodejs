
import LoginSystem from './order_1_to_44/order_2_LoginSystemByHttps'

const request = new LoginSystem({
  hostname: '192.168.105.88',
  port: '443',
  path: '/axapi/v3/auth',
  method: 'POST',
  rejectUnauthorized: false,
  // requestCert: true,
  headers: {
    'Content-Type': 'Application/json'
  }
});

const dataUrls = [
  '/axapi/v3/slb/template/client-ssl/',
  '/axapi/v3/slb/template/server-ssl/'
]


// request.login((res) => {
//   console.log(res)
//   console.log(request.hashcode)

//   const result = await request.get('/axapi/v3/slb/template')
//   console.log(result);
// })

getComposePatinationList() {
  const compositeList = [];
  const compositeTotal = 0;
  dataUrls.map((dataUrl) => {

  });
}

for (var i = 31; i < 50; i ++) {
  console.log(`slb template client-ssl c${i}`)
}
