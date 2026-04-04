
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Crowdfunding {
    string public groupname;
    string public description;
    uint256 public goal;
    uint256 public deadline; 
    address public owner;
    uint256 public groupSize;
    mapping(address => bool) public groupMembers;
    address[] public members; 
    mapping(address => uint256) public memberIndex;
    uint256 public memberCount;
    uint256 public cycle;
    address private admit;
    mapping(address => uint256) public withdrawDate;
    uint256 public period;
    mapping(address => mapping(uint256 => bool)) public cycleCompleted;
    mapping(address => mapping(uint256 => uint256)) public cycleContribution;
    uint256 public paidcounter;
    mapping(uint256=>address) public paidoutorder;
    uint256 public order;
    address [] public keys;
    string public groupcode;
    IERC20 public USDC;

    constructor(
        address _owner,
        string memory _groupname,
        string memory _description,
        uint256 _goal,
        uint256 _duraytionInDays,
        uint256 _groupSize,
        address _admit,
        string memory _groupcode
    ) {
        require(_groupSize>0, "Group size must be greater than 0");
        owner = _owner;
        groupname = _groupname;
        description = _description;
        goal=_goal;
        deadline = block.timestamp + (_duraytionInDays * 1 days);
        groupSize = _groupSize;
        admit = _admit;
        groupcode = _groupcode;
        groupMembers[_owner] = true ;
        members.push(_owner);
        paidoutorder[1] = _owner;
        memberCount = 1;
        period = _duraytionInDays * 1 days;
        cycle = 1;
        order = 2;
        //USDC contract on AMOY
        USDC = IERC20(0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582);
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

    function fund(uint _amount) public onlyGroupMember{
        //require(msg.value > 0, "The deposition should be greater than 0." );
        require(_amount > 0, "The deposition should be greater than 0." );
        require(!cycleCompleted[msg.sender][cycle], "Already funded");
        require(block.timestamp < deadline, "The Current Cycle has ended");
        require(cycle <= groupSize, "All cycles are ended.");
        require(USDC.transferFrom(msg.sender, address(this), _amount), "USDC transfer failed");
        cycleCompleted[msg.sender][cycle] = true;
        paidcounter ++;
        cycleContribution[msg.sender][cycle] = _amount;
        keys.push(msg.sender);
        //Auto Withdraw //Reserved for modification
        if (paidcounter == groupSize) {
            withdraw(members[cycle-1]);
            paidcounter=0;
        } 
        
    }
    function withdraw(address _withdrawMember) public onlyGroupMember{
        //require(address(this).balance >= goal, "Goal had not been reached");
        require(USDC.balanceOf(address(this)) >= goal, "Goal had not been reached");
        require(groupMembers[_withdrawMember], "This is not a Group member!");
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(_withdrawMember).transfer(balance);
        deadline = deadline + period;
        cycle++;
        delete keys;
    }

    function checkUSDCBalance(address _address) public view returns (uint256) {
        return USDC.balanceOf(_address);
    }


    function getContractBalance() public view returns (uint256) {
        //return address(this).balance;
        return USDC.balanceOf(address(this));
    }

    function getMemberCycleStatus(uint256 _cycle) public view returns (bool) {
        return cycleCompleted[msg.sender][_cycle];
    }

    function addGroupMember(address _newMember, string memory _groupCode) public {
        require(
            keccak256(abi.encodePacked(_groupCode)) == keccak256(abi.encodePacked(groupcode)),
            "Invalid Group Code"
        );
        require(_newMember != address(0), "Invalid address");
        require(!groupMembers[_newMember], "Address is already a member");
        require(memberCount < groupSize, "Group size limit reached");
        groupMembers[_newMember] = true;
        members.push(_newMember);
        memberIndex[_newMember] = members.length - 1;
        paidoutorder[order] = _newMember;
        order++;
        memberCount++;
    }

    function removeGroupMember(address _removemMember) public onlyOwner {
        require(_removemMember != address(0), "Invalid address");
        require(groupMembers[_removemMember], "Address is not a member");
        require(memberCount >1 , "At least 1 member is required");
        groupMembers[_removemMember] = false;
        uint256 index = memberIndex[_removemMember];
        uint256 lastIndex = members.length - 1;
         if (index != lastIndex) {
            address lastMember = members[lastIndex];
            members[index] = lastMember;
            memberIndex[lastMember] = index; 
        }
        members.pop();
        delete memberIndex[_removemMember];
        memberCount--;
    }
    
    function getGroupCode() public view onlyOwner returns (string memory) {
        return groupcode;
    }


    function isKeysArrayEmpty() public view returns (bool) {
        return keys.length == 0;
    }
    function resolveCycle() public onlyAdmit {
        require(block.timestamp >= deadline, "The Current Cycle has not ended yet.");
        if (isKeysArrayEmpty()){
            deadline = deadline + period;
        }else{
            for (uint256 i = 0; i<keys.length;i++) {
                payable(keys[i]).transfer(cycleContribution[keys[i]][cycle]);
            }
            deadline = deadline + period;
        }
    }
}