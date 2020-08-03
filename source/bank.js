const data = require("./data.js")
module.imports = data;

class Account{

}

class SavingsAccount{

  constructor(name,acctID, mob, bal){


  }

    withdraw = (x) => {

          return this.bal-x
  }
}

module.exports = {
    Account,
    SavingsAccount
}