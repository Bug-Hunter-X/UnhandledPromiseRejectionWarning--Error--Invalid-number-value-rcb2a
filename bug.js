function getBalance() {
  const balance = await contract.methods.balanceOf(address).call();
  return parseInt(balance);
}

//Error: UnhandledPromiseRejectionWarning: Error: Invalid number value