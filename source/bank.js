const data = require("./data.js")
module.imports = data;

class Account{
}

class SavingsAccount{
  data.customer.name = "hello";
  // constructor(name,acctID, mob, bal){


  // }
  //   withdraw = (x) => {

  //         return this.bal-x
  // }
}

module.exports = {
    Account,
    SavingsAccount
}