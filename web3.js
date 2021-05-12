const Web3 = require('web3')
const abi = require('./abi')

const main = async () => {
  const  web3js = new Web3(
    new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/d18d0447b35949089cdac96f1ba3d43c")
  );
  const myContract = new web3js.eth.Contract(
    abi,
    '0x1c20e891bab6b1727d14da358fae2984ed9b59eb'
  );
  console.log(myContract.methods)
  let totalSupplyResponse = await myContract.methods[
    "totalSupply"
    ]()
    .call()

  console.log(totalSupplyResponse / 10 ** 18)
}
  
main()
