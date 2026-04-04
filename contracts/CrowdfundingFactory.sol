// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Crowdfunding} from "./Crowdfunding.sol";

contract CrowdfundingFactory {
    address public owner;
    bool public paused;

    struct Campaign {
        address campaignAddress;
        address owner;
        string groupname;
        uint256 creationTime;
        uint256 groupSize;
    }

    Campaign[] public campaigns;
    mapping(address => Campaign[]) public userCampaigns;
    mapping(address => address[]) public myCampaigns;

    event CampaignCreated(
        address indexed campaignAddress,
        address indexed owner,
        string groupname,
        uint256 creationTime,
        uint256 groupSize
    );
    event MemberAdded(
        address indexed newMember,
        address indexed campaignAddress
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner!");
        _;
    }
    modifier notPaused(){
        require(!paused, "Factory is paused");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function createCampaign(
        string memory _groupname,
        string memory _description,
        uint256 _goal,
        uint256 _durationInDays,
        uint256 _groupsize,
        address _admit,
        string memory _groupcode
    ) external notPaused {
        Crowdfunding newCampaign = new Crowdfunding (
            msg.sender,
            _groupname,
            _description,
            _goal,
            _durationInDays,
            _groupsize,
            _admit,
            _groupcode
        );
        address campaignAddress = address(newCampaign);
        Campaign memory campaign = Campaign({
            campaignAddress: campaignAddress,
            owner: msg.sender,
            groupname: _groupname,
            creationTime: block.timestamp,
            groupSize: _groupsize
        }); 
        campaigns.push(campaign);
        userCampaigns[msg.sender].push(campaign);
        emit CampaignCreated(
            campaignAddress,
            msg.sender,
            _groupname,
            block.timestamp,
            _groupsize
        );
    }

    function addCampaignMember(address _campaignAddress, string memory _groupCode) external {
        Crowdfunding campaign = Crowdfunding(_campaignAddress); 
        campaign.addGroupMember(msg.sender, _groupCode);  
        myCampaigns[msg.sender].push(_campaignAddress);
        emit MemberAdded(msg.sender, _campaignAddress);
    }
    function getJoinedCampaigns(address _user)external view returns (address[] memory){
        return myCampaigns[_user];
    }

    function getUserCampaigns(address _user) external view returns (Campaign[] memory){
        return userCampaigns[_user];
    }
    function getAllCampaigns() external view returns (Campaign[] memory){
        return campaigns;
    }
    function togglePause() external onlyOwner{
        paused=!paused;
    }
}