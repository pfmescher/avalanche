module.exports =  [{
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "burner",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
  "name": "Burn",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
    "indexed": false,
    "internalType": "address",
    "name": "finOp",
    "type": "address"
  }],
  "name": "BurnRewardToken",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Mint",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
    "indexed": false,
    "internalType": "address",
    "name": "finOp",
    "type": "address"
  }],
  "name": "MintRewardToken",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
    "indexed": false,
    "internalType": "address",
    "name": "finOp",
    "type": "address"
  }],
  "name": "RedeemRewardToken",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "uint256",
    "name": "newMin",
    "type": "uint256"
  }, {"indexed": false, "internalType": "uint256", "name": "newMax", "type": "uint256"}],
  "name": "SetBurnBounds",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "registry", "type": "address"}],
  "name": "SetRegistry",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "address", "name": "receiver", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {"indexed": false, "internalType": "address", "name": "finOp", "type": "address"}],
  "name": "SwapRewardForToken",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "address", "name": "receiver", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {"indexed": false, "internalType": "address", "name": "finOp", "type": "address"}],
  "name": "SwapTokenForReward",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "address", "name": "_account", "type": "address"}],
  "name": "TrueRewardDisabled",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "address", "name": "_account", "type": "address"}],
  "name": "TrueRewardEnabled",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256"}],
  "name": "WipeBlacklistedAccount",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "RESERVE",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "_who", "type": "address"}, {
    "internalType": "address",
    "name": "_spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "_value",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "_who", "type": "address"}],
  "name": "balanceOf",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "uint256", "name": "_value", "type": "uint256"}],
  "name": "burn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "burnMax",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "burnMin",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "claimOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "debtBackedSupply",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "_subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }],
  "name": "delegateAllowance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }, {"internalType": "address", "name": "origSender", "type": "address"}],
  "name": "delegateApprove",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "who", "type": "address"}],
  "name": "delegateBalanceOf",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
  }, {"internalType": "address", "name": "origSender", "type": "address"}],
  "name": "delegateDecreaseApproval",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
  }, {"internalType": "address", "name": "origSender", "type": "address"}],
  "name": "delegateIncreaseApproval",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "delegateTotalSupply",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }, {"internalType": "address", "name": "origSender", "type": "address"}],
  "name": "delegateTransfer",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {"internalType": "uint256", "name": "value", "type": "uint256"}, {
    "internalType": "address",
    "name": "origSender",
    "type": "address"
  }],
  "name": "delegateTransferFrom",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "depositBackedSupply",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "disableTrueReward",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "enableTrueReward",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "uint256", "name": "_index", "type": "uint256"}],
  "name": "gasRefundPool",
  "outputs": [{"internalType": "uint256", "name": "gasPrice", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_spender", "type": "address"}, {
    "internalType": "uint256",
    "name": "_addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "minimumGasPriceForFutureRefunds",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "minimumGasPriceForRefund",
  "outputs": [{"internalType": "uint256", "name": "result", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_to", "type": "address"}, {
    "internalType": "uint256",
    "name": "_value",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{"internalType": "string", "name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "opportunity",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "uint256", "name": "_value", "type": "uint256"}],
  "name": "opportunityReserveMint",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "uint256", "name": "_value", "type": "uint256"}],
  "name": "opportunityReserveRedeem",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "opportunity_",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "paused",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "pendingOwner",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "contract InstantiatableOwnable", "name": "_ownable", "type": "address"}],
  "name": "reclaimContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address payable", "name": "_to", "type": "address"}],
  "name": "reclaimEther",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
  }, {"internalType": "address", "name": "_to", "type": "address"}],
  "name": "reclaimToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "registry",
  "outputs": [{"internalType": "contract Registry", "name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "remainingGasRefundPool",
  "outputs": [{"internalType": "uint256", "name": "length", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "reserveBalance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "finOp", "type": "address"}],
  "name": "reserveRewardBalance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "reserveWithdraw",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
    "internalType": "address",
    "name": "finOp",
    "type": "address"
  }],
  "name": "rewardTokenBalance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "finOp", "type": "address"}],
  "name": "rewardTokenSupply",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "rounding",
  "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "uint256", "name": "_min", "type": "uint256"}, {
    "internalType": "uint256",
    "name": "_max",
    "type": "uint256"
  }],
  "name": "setBurnBounds",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "uint256", "name": "_minimumGasPriceForFutureRefunds", "type": "uint256"}],
  "name": "setMinimumGasPriceForFutureRefunds",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_opportunity", "type": "address"}],
  "name": "setOpportunityAddress",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "contract Registry", "name": "_registry", "type": "address"}],
  "name": "setRegistry",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "sponsorGas",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "sponsorGas2",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{"internalType": "string", "name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_who", "type": "address"}, {
    "internalType": "bytes32",
    "name": "_attribute",
    "type": "bytes32"
  }, {"internalType": "uint256", "name": "_value", "type": "uint256"}],
  "name": "syncAttributeValue",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_to", "type": "address"}, {
    "internalType": "uint256",
    "name": "_value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_from", "type": "address"}, {
    "internalType": "address",
    "name": "_to",
    "type": "address"
  }, {"internalType": "uint256", "name": "_value", "type": "uint256"}],
  "name": "transferFrom",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"internalType": "address", "name": "_address", "type": "address"}],
  "name": "trueRewardEnabled",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"internalType": "address", "name": "_account", "type": "address"}],
  "name": "wipeBlacklistedAccount",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]