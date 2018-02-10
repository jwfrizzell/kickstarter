pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint _minimum) public{
        address newCampaign = new Campaign(_minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}


contract Campaign{
    
    /*
    Managers will create a purchase request 
    that will need to be validated by the
    approvers. Once a percentage of the approvers
    have signed off on a request then the request
    will be sent to the recipient.
    */
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    
        /*
    Allowes functions to only be executed if they are the 
    manager. 
    */
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    /*
    minimum: Minimum amount of wei allowed to enter campaign . 
    */
    function Campaign(uint _minimum, address _creator) public {
        manager = _creator;
        minimumContribution = _minimum;
    }
    
    /*
    Validate the amount in the sent transaction is 
    greater than the minimum allowed contribution.
    If true then add address to list of campaign 
    approvers. 
    */
    function contribute() public payable {
        require(msg.value >= minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    /*
    Manager of project creates a new purchase request. 
    */
    function createRequest(string _description, uint _value, address _recipient) 
        public restricted 
    {
        Request memory request = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(request);
        
    }
    
    /*
    Approver who has funded the campaign approves a purchase request.
    */
    function approveRequest(uint _index) public {
        Request storage request = requests[_index];
        
        require(approvers[msg.sender]);
        //Verify approver hasn't already approved this request. 
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    /*
    If a request has been approved by a majority of approvers then 
    send request payment to address. 
    */
    function finalizeRequest(uint _index) public restricted {
        Request storage request = requests[_index];
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        
        request.complete = true;
    }
    
    function getSummary() public view returns(uint, uint, uint,uint,address){
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }
    
    function getRequestsCount() public view returns(uint){
        return requests.length;
    }
}