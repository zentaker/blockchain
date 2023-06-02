import { Block } from './Block';
import { Transaction } from './Transaction';
import * as crypto from 'crypto';

export class Blockchain {
    constructor(
        private name: string,
        private chain: Block[]=[],
        private newTransactions: Transaction[]=[],
    ){}
    // el bloque al momento que se crea se agrega a la cadena
    createNewBlock( nonce: number, hash: string, previousBlockhash?: string) {

        
        const index = this.chain.length +1;
        const timestamp = Date.now();//cuando fue creado el bloque

        // pasarle las pending transaction al bloque 
        const transactions = this.newTransactions;
        const newBlock = new Block(index, timestamp, nonce, hash, previousBlockhash, transactions);
        this.chain.push(newBlock);
        this.newTransactions=[];
        return true
    }
    createNewTransaction(amount: number, sender: string, recipient: string){
        const newTransaction = new Transaction(amount, sender, recipient);
        //agregar la nueva transaccion
        this.newTransactions.push(newTransaction);
        return true

    }
    hashBlock(previousBlockhash: string, currentBlockData: any, nonce: number){
        const dataAsString = previousBlockhash + nonce.toString() + JSON.stringify(currentBlockData);
        //crear un objeto de hashsha256
        const sha256Hash = crypto.createHash('sha256');
        //actualizar el hash con los datos
        sha256Hash.update(dataAsString);
        //calcular el hast en formato hexadecimal
        const hashedData = sha256Hash.digest('hex')

        return hashedData;

    }
    proofOfWork(previousBlockhash: string, currentBlockData: any){
        let nonce = 0;
        let hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
        while (hash.substring(0,4)!== '0000'){
            nonce++;
            hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
            //ver el trabajo
            //console.log(hash);
        }
        return nonce
    }

    
   
  

    getBlockByIndex(index: number): Block {
        return this.chain[index-1];
    }
    getAllBlocks() {
        return this.chain;

    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }


 

  




}



