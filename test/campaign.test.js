//Add  "test": "mocha" to package.json
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({data: compiledFactory.bytecode})
		.send({from: accounts[0], gas: 1000000});

	factory.setProvider(provider);

	await factory.methods.createCampaign('100')
		.send({from: accounts[0], gas: 1000000});

	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
	);

});

describe('Campaigns', () => {
	//Determine if contracts were successfully deployed. 
	it('deploys a factory and a campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it('marks the caller as the campaign manager',  async () =>{
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it('allow people to contribute money and marks them as approvers', async () => {
		await campaign.methods.contribute().send({
			from: accounts[1],
			value: '101'
		});

		const isContributor = await campaign.methods.approvers(accounts[1]).call();
		assert(isContributor);
	});

	/*
		Minimum contribution is 100. Verify that if contributor
		tries to send a contribution less than 100 then the 
		variable {@error} will get set to the error returned. 
	*/
	it('requires a minimum contribution', async () =>{
		let error;
		try{
			await campaign.methods.contribute().send({
				from: accounts[2],
				value: 99
			});
		}
		catch(err){
			error = err;
		}
		assert(error)
	});

	it('allows manager to create a purchase request', async () =>{
		await campaign.methods
			.createRequest('Tools','5',accounts[3]).send({
				from: accounts[0],
				gas: 1000000
		});

		const request = await campaign.methods.requests(0).call();
		//console.log(request);
		assert.equal('Tools', request.description);
	});

	it('processes request', async () => {
		let beginningBalance = await web3.eth.getBalance(accounts[5]);
		beginningBalance = parseFloat(web3.utils.fromWei(beginningBalance,'ether'));

		await campaign.methods.contribute().send({
			from: accounts[2],
			value: web3.utils.toWei('10', 'ether')
		});

		await campaign.methods.createRequest('Hardback books', 
			web3.utils.toWei('5','ether'),accounts[5]).send({
				from: accounts[0],
				gas: 1000000
		});

		await campaign.methods.approveRequest(0).send({
			from: accounts[2],
			gas: 1000000
		});
		
		await campaign.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas: 1000000
		});

		let endingBalance = await web3.eth.getBalance(accounts[5]);
		endingBalance = parseFloat(web3.utils.fromWei(endingBalance,'ether'));
		assert(endingBalance > beginningBalance);
	});
});







