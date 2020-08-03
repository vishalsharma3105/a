const bank = require("./bank.js")
module.imports = bank.Account;
module.imports = bank.SavingsAccount;

describe('withdraw', () => {
    it('should return the balance after withdraw operation', () => {
        var obj = new bank.SavingsAccount("Nick", 112, 1234567890, 21000);  
        var x = obj.withdraw(10000);
        expect(x).toBe(11000);
    });
    it('should return the balance after withdraw operation', () => {
        var obj = new bank.SavingsAccount("Nick", 112, 1234567890, 21000);  
        var x = obj.withdraw(100000);
        expect(x).toBe(21000);
    });
});

describe('deposit', () => {
    it('should return the balance after deposit operation', () => {
        var obj = new bank.SavingsAccount("Nick", 112, 1234567890, 21000);  
        var x = obj.deposit(10000);
        expect(x).toBe(31000);
    });
});