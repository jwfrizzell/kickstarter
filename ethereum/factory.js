import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface), //ABI
	'0x70Bfc5dF78F8B2e9e7E3f68e019347c2f850f5F5'//Deployed address
);

export default instance;