const data = require("./data.js")
module.imports = data;

class Account{
}

class SavingsAccount{

   constructor(name,acctID, mob, bal){
          var obj1 = new data();
          obj1.name = name;
          obj1.id = acctID;
          obj1.mob_no = mob;
          obj1.balance = bal

   }
  //   withdraw = (x) => {

  //         return this.bal-x
  // }
}

module.exports = {
    Account,
    SavingsAccount
}