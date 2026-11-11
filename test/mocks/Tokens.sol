// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint8 private immutable precision;

    constructor(string memory tokenName, string memory tokenSymbol, uint8 tokenDecimals) ERC20(tokenName, tokenSymbol) {
        precision = tokenDecimals;
    }

    function decimals() public view override returns (uint8) {
        return precision;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract WrappedEther is Token {
    constructor() Token("Wrapped Ether", "WETH", 18) {}

    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        _burn(msg.sender, amount);

        (bool transferSucceeded,) = msg.sender.call{value: amount}("");
        require(transferSucceeded);
    }

    receive() external payable {
        _mint(msg.sender, msg.value);
    }
}
