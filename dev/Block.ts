import { Transaction } from "./Transaction";
export class Block {
    constructor(
        private index: number,
        private timestamp: number,
        private nonce: number,
        private hash: string,
        private previousBlockhash?: string,
        private transactions: Transaction[]=[],

    ){}

    
  
 



}