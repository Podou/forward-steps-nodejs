
import jwt from 'jsonwebtoken';

const cert = 'It is jwt cert';

const token = jwt.sign(
  {data: {username: 'admin'}},
  cert,
  { expiresIn: 60 * 60 }
);

console.log(token);
const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwiaWF0IjoxNTI3NDM4MDg4LCJleHAiOjE1Mjc0NDE2ODh9.0CYjuSaSrTYG9_wZJmm18CNj1wMfRh-KLsyf0lxrlnU';
const verifyToken = jwt.verify(myToken, cert);
console.log(verifyToken);
