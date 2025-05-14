// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.27;

//|---------------------|
//|        Admin        |
//|---------------------|
//|         Name        |
//|    Wallet Address   |
//|   Physical Address  |
//|---------------------|

contract FinalsContract {
    

    

    constructor(string memory _name, address _walletAddress, string memory _physicalAddress) {
        admins.push(Admin (_name, _walletAddress, _physicalAddress));
    }

    struct Admin{
        string name;
        address walletAddress;
        string physicalAddress;
    }

    Admin[] public admins;

    function addAdmin (string memory _name, address _walletAddress, string memory _physicalAddress) public {
    
    bool canAdd = false;

    for (uint i = 0; i<admins.length; i++){
        if(msg.sender == admins[i].walletAddress){
            canAdd = true;
        }
    }

    require(canAdd == true, "You are not an admin");
    admins.push(Admin(_name, _walletAddress, _physicalAddress));
}

function verifyAdmin(string memory _name, string memory _physicalAddress) public view returns (bool)  {
    bool isAdmin = false;

    for (uint i = 0; i<admins.length; i++){
        if (keccak256(abi.encode(admins[i]))== keccak256(abi.encode(_name)) && keccak256(abi.encode(admins[i])) == keccak256(abi.encode(_physicalAddress))) {
            isAdmin = true;
        }
    }
    return isAdmin;
    
}
   
}