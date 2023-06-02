import { Block } from "./dev/Block";
import { Blockchain } from "./dev/blockchain";
import { Transaction } from "./dev/Transaction";

const blockchain = new Blockchain('prueba');

blockchain.createNewBlock( 2389, 'OIUOEREEDHKDE');
blockchain.createNewBlock( 2389, 'JENN5BG5DF6HTGFAD','OIUOEREEDHKDE');
//console.log(blockchain.getAllBlocks());

blockchain.createNewTransaction(22000, 'ALEXH845SJ5TKCJ2','JENN5BG5DF6HTGFAD')
blockchain.createNewTransaction(10000, 'ALEXH845SJ5TKCJ2','JENN5BG5DF6HTGFAD')

blockchain.createNewBlock( 2389, 'JENN5BG5DF6HTGFAD','ALEXH845SJ5TKCJ2');
//console.log(blockchain.getLastBlock())


blockchain.createNewTransaction(10000, 'ALEXH845SJ5TKCJ2','JENN5BG5DF6HTGFAD')
blockchain.createNewTransaction(20000, 'ALEXH845SJ5TKCJ2','JENN5BG5DF6HTGFAD')

blockchain.createNewBlock( 2389, 'JENN5BG5DF6HTGFAD','ALEXH845SJ5TKCJ2');

console.log(blockchain.getBlockByIndex(4));

const previousBlockHash = '687765DA6CCF0668238C1D372737DS11';

const currentBlockData = [{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 20,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
}];

const nonce = 2955;

console.log(blockchain.hashBlock(previousBlockHash,currentBlockData,nonce ))
console.log(blockchain.proofOfWork(previousBlockHash,currentBlockData));




