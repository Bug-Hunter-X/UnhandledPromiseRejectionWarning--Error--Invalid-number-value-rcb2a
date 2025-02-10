const BigNumber = require('bignumber.js');

async function getBalance() {
  const balance = await contract.methods.balanceOf(address).call();
  return new BigNumber(balance);
}
//Now you can use the BigNumber object to perform mathematical operations without the overflow error.