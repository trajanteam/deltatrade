import web3 from '../web3';
import DeltaTrade from './DeltaTrade.json';

const address = '0x7868b6c8e409ba4d2aeec668676ec3a46fdbf084';

const instance = new web3.eth.Contract(
  DeltaTrade.abi,
  '0x7868b6c8e409ba4d2aeec668676ec3a46fdbf084'
)

export default instance;
