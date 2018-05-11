import web3 from '../../web3'
import MKR from './MKR.json'

const address = '0x65e09e4260d81bc58c585eba67b7a8d71020d4ec'

const instance = new web3.eth.Contract(
  MKR.abi,
  '0x65e09e4260d81bc58c585eba67b7a8d71020d4ec'
)

export default instance;
