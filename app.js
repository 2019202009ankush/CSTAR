// Import all required modeles
const express = require("express");
const Wallet = require("./wallet");
const bodyParser = require("body-parser");
const TransactionPool = require("./transaction-pool");
const P2pserver = require("./p2p-server");
const Validators = require("./validators");
const Blockchain = require("./blockchain");
const BlockPool = require("./block-pool");
const CommitPool = require("./commit-pool");
const PreparePool = require("./prepare-pool");
const MessagePool = require("./message-pool");
const { NUMBER_OF_NODES } = require("./config");
const HTTP_PORT = process.env.HTTP_PORT || 3001;

// Instantiate all objects
const app = express();
app.use(bodyParser.json());

const wallet = new Wallet(process.env.SECRET);
const transactionPool = new TransactionPool();
const validators = new Validators(NUMBER_OF_NODES);
const blockchain = new Blockchain(validators);
const blockPool = new BlockPool();
const preparePool = new PreparePool();
const commitPool = new CommitPool();
const messagePool = new MessagePool();
const p2pserver = new P2pserver(
  blockchain,
  transactionPool,
  wallet,
  blockPool,
  preparePool,
  commitPool,
  messagePool,
  validators
);

// sends all transactions in the transaction pool to the user
app.get("/transactions", (req, res) => {
  res.json(transactionPool.transactions);
});

// sends the entire chain to the user
app.get("/blocks", (req, res) => {
  let chain=blockchain.chain;
  let newArray = []; 
              
            // Declare an empty object 
  let uniqueObject = {}; 
              
            // Loop for the array elements 
  for (let i in chain) { 

      // Extract the title 
      objTitle = chain[i]['lastHash']; 

      // Use the title as the index 
      uniqueObject[objTitle] = chain[i]; 
  } 
    
  // Loop to push unique object into array 
  for (i in uniqueObject) { 
      newArray.push(uniqueObject[i]); 
  } 
  
  res.json(newArray);
});

// creates transactions for the sent data
app.post("/transact", (req, res) => {
  const data  = req.body.x;
  
  const transaction = wallet.createTransaction(data);
  p2pserver.broadcastTransaction(transaction);
  res.redirect("/transactions");
});

// starts the app server
app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
});

// starts the p2p server
p2pserver.listen();
