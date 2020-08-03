
import { customer }  from './data';

class Account{

}

class SavingsAccount{

   constructor(name,acctID, mob, bal){

          customer.name = name;
          customer.id = acctID;
          customer.mob_no = mob;
          customer.balance = bal

   }
    var withdraw = (x) => {

          return customer.balance-x
   }
}

module.exports = {
    Account,
    SavingsAccount
}