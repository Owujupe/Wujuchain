
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
    uint256 public cycle;
    address private admit;
    mapping(address => uint256) public withdrawDate;
    uint256 public period;
    mapping(address => mapping(uint256 => bool)) public cycleCompleted;

    
    

    constructor(
        string memory _groupname,
        string memory _description,
        uint256 _goal,
        uint256 _duraytionInDays,
        uint256 _groupSize,
        address _admit
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
        period = _duraytionInDays * 1 days;
        cycle = 1;
        admit = _admit;
    }

    modifier onlyGroupMember() {
        require(groupMembers[msg.sender], "Only group members can perform this action");
        _;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }
    modifier onlyAdmit() {
        require(msg.sender == admit, "Only admit can access this!");
        _;
    }

    function fund() public payable onlyGroupMember{
        require(msg.value > 0, "The deposition should be greater than 0." );
        require(!cycleCompleted[msg.sender][cycle], "Already funded");
        require(block.timestamp < deadline, "The Current Cycle has ended");
        require(cycle <= groupSize, "All cycles are ended.");
        cycleCompleted[msg.sender][cycle] = true;
    }

    function withdraw(address _withdrawMember) public onlyAdmit{
        require(address(this).balance >= goal, "Goal had not been reached");
        require(groupMembers[_withdrawMember], "This is not a Group member!");
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(_withdrawMember).transfer(balance);
        deadline = deadline + period;
        cycle++;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getMemberCycleStatus(uint256 _cycle) public view returns (bool) {
        return cycleCompleted[msg.sender][_cycle];
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