const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// async function test(){
//   await prisma.user.create({
//     data:{
//       email: "Sanketttttt",
//       password: await bcrypt.hash("sankeJha",10),
//       name: "sanket"
//     }
//   })
// }

async function test() {
  const user = await prisma.user.findUnique({
    where: { email: 'Sanketttttt' }
  });
  if (bcrypt.compareSync("sankeJha",user.password)){
    console.log("password shi hai")
  }else{
    console.log("galat hai password")
  }
  return user
}

test()