pragma solidity ^0.4.23;

contract Burn {
  // getter: totalBurned
  uint256 public totalburned;
  event DidBurn(address burnerAddress, uint256 burnedAmount);

  function burnbabyburn() public payable {
    totalburned += msg.value;
    emit DidBurn(msg.sender, msg.value);
  }
}
