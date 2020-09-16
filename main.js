var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(abi , "0x970079a69900B9f5fe3CC42150Aab0E66041A3d1",{from:accounts[0]});
      console.log(contractInstance);
    });
    $("#add_data_button").click(inputData)
});

function inputData(){
  alert("inputdata");
}
