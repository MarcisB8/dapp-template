var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(abi, "0x769D7Af50f597e316Aba61cD1DD06Bdd06eeECA0", {from: accounts[0]});
      console.log(contractInstance);
    });

});
