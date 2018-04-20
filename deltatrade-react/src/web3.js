import Web3 from 'web3';
//Web3 is constructor function! So capital W right here.

const web3 = new Web3(window.web3.currentProvider);
// window is global variable. metamask injected web3 as a global variable.
export default web3;
