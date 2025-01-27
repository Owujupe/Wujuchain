
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    string public groupname;
    string public description;
    uint256 public goal;
    uint256 public deadline; 
    address public owner;
    uint256 public groupSize;
    mapping(address => bool) public groupMembers;
    uint256 public memberCount;
    
    

    constructor(
        string memory _groupname,
        string memory _description,
        uint256 _goal,
        uint256 _duraytionInDays,
        uint256 _groupSize
    ) {
        require(_groupSize>0, "Group size must be greater than 0");
        groupname = _groupname;
        description = _description;
        goal=_goal;
        deadline = block.timestamp + (_duraytionInDays * 1 days);
        owner = msg.sender;
        groupSize = _groupSize;
        groupMembers[msg.sender] =true;
        memberCount = 1;
    }

    modifier onlyGroupMember() {
        require(groupMembers[msg.sender], "Only group members can perform this action");
        _;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function fund() public payable onlyGroupMember{
        require(msg.value > 0, "The deposition should be greater than 0." );
        require(block.timestamp < deadline, "The Current Cycle has ended");
    }

    function withdraw() public onlyGroupMember{
        require(address(this).balance >= goal, "Goal had not been reached");

        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner).transfer(balance);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function addGroupMember(address _newMember) public {
        require(_newMember != address(0), "Invalid address");
        require(!groupMembers[_newMember], "Address is already a member");
        require(memberCount < groupSize, "Group size limit reached");

        groupMembers[_newMember] = true;
        memberCount++;
    }

    function removeGroupMember(address _removemMember) public onlyOwner {
        require(_removemMember != address(0), "Invalid address");
        require(groupMembers[_removemMember], "Address is not a member");
        require(memberCount >1 , "At least 1 member is required");
        groupMembers[_removemMember] = false;
        memberCount--;
    }
}